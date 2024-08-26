import PostCard from "@/app/PostCard";
import React from "react";
import { PrismaClient } from "@prisma/client";
import { JsonArray } from "@prisma/client/runtime/library";

const page = async () => {
    const prisma = new PrismaClient();

    const blogs = await prisma.blogPost.findMany({});

    return (
        <main className="container mx-auto min-h-screen mb-10">
            <section id="heading" className="my-10">
                <h1 className="text-4xl">Explore the Journey of Developers</h1>
                <p className="text-lg mt-2">
                    Discover the latest insights, projects, and experiences from
                    the world of developers.
                </p>
            </section>
            <section
                id="main"
                className="grid grid-cols-1 md:grid-cols-12 gap-4"
            >
                <div className="col-span-8 flex flex-col gap-4">
                    {blogs.map((blog) => (
                        <PostCard
                            key={blog.id}
                            title={blog.title}
                            description={blog.description}
                            slug={blog.slug}
                            content={blog.content as JsonArray}
                        />
                    ))}
                </div>
                <div className="col-span-4"></div>
            </section>
        </main>
    );
};

export default page;
