"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getBlog } from "./actions";
import { JsonValue } from "@prisma/client/runtime/library";
import Viewer from "./Viewer";
import { Tag } from "@/components/PostCard";
import dynamic from "next/dynamic";

const Loader = dynamic(() => import("@/components/Loader"), { ssr: false });

interface Blog {
    id: string;
    title: string;
    content: JsonValue;
    contentMd: string;
    slug: string;
    tags: string[];
    author: string;
    authorUser: { name: string };
    description: string;
    createdAt: Date;
    updatedAt: Date;
}

const page = () => {
    const { blogId } = useParams();

    const [blog, setBlog] = useState<Blog | null>({} as Blog);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleFetchBlog = async () => {
            setLoading(true);
            const blog = await getBlog(blogId as string);
            console.log(blog);
            if (!blog) {
                setBlog({} as Blog);
            }

            setBlog(blog as Blog);
            setLoading(false);
        };

        handleFetchBlog();
    }, [blogId]);

    return loading ? (
        <main className="flex justify-center min-h-screen mb-10 py-10">
            <div>
                <Loader />
            </div>
        </main>
    ) : (
        !!blog && (
            <main className="container mx-auto min-h-screen mb-10 py-10">
                <div className="mb-10">
                    <h1 className="text-5xl text-center font-bold tracking-tight text-primary dark:text-primary-foreground-dark mb-2">
                        {blog.title}
                    </h1>
                    <div className="text-center">
                        <h2>Author: {blog.authorUser.name}</h2>
                        <h2>
                            Date Published:{" "}
                            {new Date(blog.createdAt).toLocaleDateString()}
                        </h2>
                        <div className="flex py-2 text-sm gap-2 flex-wrap justify-center">
                            {blog.tags.map((tag) => (
                                <Tag key={tag} href="#" tag={tag} />
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <Viewer initialContent={blog.contentMd} />
                </div>
            </main>
        )
    );
};

export default page;
