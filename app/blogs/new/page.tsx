"use client";
import React, { useMemo, useState } from "react";
import dynamic from "next/dynamic";
import TextareaAutosize from "react-textarea-autosize";
import { Block } from "@blocknote/core";
import { Button } from "@/components/ui/button";
import { EditorContext } from "./context";
import { createPost } from "./actions";
import toast from "react-hot-toast";

const page = () => {
    const [title, setTitle] = useState<string>("Untitled Post");
    const [description, setDescription] = useState<string>("");
    const [contentBlocks, setContentBlocks] = useState<Block[]>([]);

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const Editor = useMemo(
        () => dynamic(() => import("./Editor"), { ssr: false }),
        []
    );

    const handleSave = async () => {
        setIsLoading(true);
        const post = await createPost({ title, description, contentBlocks });
        console.log(post);
        setIsLoading(false);
        toast.success("Post Saved!");
    };

    return (
        <EditorContext.Provider
            value={{ blocks: contentBlocks, setBlocks: setContentBlocks }}
        >
            <main className="container mx-auto min-h-screen py-10">
                <div className="flex flex-col py-5 w-full">
                    <TextareaAutosize
                        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-5xl font-bold focus:outline-none"
                        placeholder="Untitled Post"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <TextareaAutosize
                        className="w-full resize-none appearance-none overflow-hidden bg-transparent text-xl focus:outline-none"
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                <Editor editable={true} />
                <div className="my-2">
                    {isLoading && (
                        <Button
                            className="btn btn-primary"
                            disabled
                            onClick={handleSave}
                        >
                            Saving...
                        </Button>
                    )}

                    {!isLoading && (
                        <Button
                            className="btn btn-primary"
                            onClick={handleSave}
                        >
                            Save
                        </Button>
                    )}
                </div>
            </main>
        </EditorContext.Provider>
    );
};

export default page;
