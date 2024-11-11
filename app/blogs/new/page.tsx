"use client";
import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import TextareaAutosize from "react-textarea-autosize";
// import { Block } from "@blocknote/core";
import { Button } from "@/components/ui/button";
import { EditorContext } from "./context";
import { createPost } from "./actions";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const page = () => {
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [contentBlocks, setContentBlocks] = useState<string>("");
    const [contentBlocksMd, setContentBlocksMd] = useState<string>("");
    const [tags, setTags] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState<string>("");

    const { data: session } = useSession();

    if (!session?.user) redirect("/login");

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const Editor = useMemo(() => dynamic(() => import("./Editor"), { ssr: false }), []);

    const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTags = e.target.value.split(",").map((tag) => tag.trim());
        setTags(newTags);
        setTagInput(e.target.value);
    };

    const handleSave = async () => {
        setIsLoading(true);
        if (title === "") {
            setIsLoading(false);
            toast.error("Not Saved. - add title");
        } else if (description === "") {
            setIsLoading(false);
            toast.error("Not Saved. - add description");
        } else if (contentBlocks === "") {
            setIsLoading(false);
            toast.error("Not Saved. - add contents");
        } else {
            const post = await createPost({
                title,
                description,
                contentBlocks,
                contentBlocksMd,
                author: session?.user?.id as string,
                tags,
            });
            console.log(post);
            setIsLoading(false);
            toast.success("Post Saved!");
        }
    };

    useEffect(() => {
        console.log(tags);
    }, [tags]);

    return (
        <EditorContext.Provider
            value={{
                blocks: contentBlocks,
                setBlocks: setContentBlocks,
                blocksMD: contentBlocksMd,
                setBlocksMD: setContentBlocksMd,
            }}
        >
            <main className="container mx-auto min-h-screen py-10">
                <div className="flex flex-col py-5 w-full">
                    <TextareaAutosize
                        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
                        placeholder="Untitled Post"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        required
                    />
                    <TextareaAutosize
                        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-xl focus:outline-none"
                        placeholder="Description - add a brief preview of your post"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                        required
                    />

                    <input
                        type="text"
                        className="w-1/2 resize-none appearance-none overflow-hidden bg-transparent text-sm my-4 border rounded p-2 focus:outline-none"
                        value={tagInput}
                        onChange={handleTagChange}
                        placeholder="Enter tags separated by commas"
                    />
                </div>
                <Editor editable={true} />
                <div className="my-2">
                    {isLoading && (
                        <Button className="btn btn-primary" disabled onClick={handleSave}>
                            Saving...
                        </Button>
                    )}

                    {!isLoading && (
                        <Button className="btn btn-primary" onClick={handleSave}>
                            Save
                        </Button>
                    )}
                </div>
            </main>
        </EditorContext.Provider>
    );
};

export default page;
