import React from "react";
import { PrismaClient } from "@prisma/client";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import PostCard from "../../components/PostCard";
import { JsonArray } from "@prisma/client/runtime/library";

const prisma = new PrismaClient();

const page = async () => {
    const session = await auth();

    if (!session?.user) return redirect("/login");

    const user = await prisma.user.findUnique({
        where: {
            id: session?.user.id,
        },
        include: {
            BlogPost: {
                orderBy: {
                    createdAt: "desc",
                },
                include: {
                    authorUser: {
                        select: {
                            name: true,
                        },
                    },
                },
            },
        },
    });

    if (!user) return redirect("/");

    console.log(user);

    return (
        <main className="container min-h-screen py-4">
            <div className="">
                <div className="flex flex-row gap-5 items-center">
                    <Image
                        src={user.image as string}
                        alt={user.name as string}
                        width={100}
                        height={100}
                        className="text-center rounded-full"
                    />
                    <h1 className="text-xl font-bold uppercase">
                        {user?.name}
                    </h1>
                </div>
            </div>

            <h1 className="text-3xl font-bold text-center my-3">My Blogs</h1>

            <div className="py-3 grid grid-cols-1 lg:grid-cols-2 gap-4">
                {user.BlogPost.map((blog) => (
                    <PostCard
                        key={blog.id}
                        title={blog.title}
                        description={blog.description}
                        slug={blog.slug}
                        tags={blog.tags}
                        authorUser={blog.authorUser}
                        content={blog.content as JsonArray}
                        createdAt={blog.createdAt}
                    />
                ))}
            </div>
        </main>
    );
};

export default page;
