"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getBlog } from "./actions";
import { JsonValue } from "@prisma/client/runtime/library";
import Viewer from "./Viewer";

interface Blog {
    id: string;
    title: string;
    content: JsonValue;
    slug: string;
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
            if (!blog) {
                setBlog({} as Blog);
            }

            setBlog(blog);
            setLoading(false);
        };

        handleFetchBlog();
    }, [blogId]);

    return loading ? (
        <main className="container mx-auto min-h-screen mb-10 py-10">
            <p>Loading Post...</p>
        </main>
    ) : (
        !!blog && (
            <main className="container mx-auto min-h-screen mb-10 py-10">
                <div className="mb-10">
                    <h1 className="text-5xl text-center font-bold tracking-tight text-primary dark:text-primary-foreground-dark mb-2">
                        {blog.title}
                    </h1>
                    <h3 className="text-xl text-center tracking-tight text-primary dark:text-primary-foreground-dark">
                        {blog.description}
                    </h3>
                </div>
                <div>
                    <Viewer initialContent={JSON.stringify(blog.content)} />
                </div>
            </main>
        )
    );
};

export default page;
