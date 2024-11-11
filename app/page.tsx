import PostCard from "@/components/PostCard";
import { Button } from "@/components/ui/button";
import { PrismaClient } from "@prisma/client";
import { JsonArray } from "@prisma/client/runtime/library";

import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Featured />
        </main>
    );
}

const Hero = () => (
    <section className="bg-accent text-access-foreground dark:bg-accent-dark py-20">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl font-bold">Welcome to DevDiary</h1>
            <p className="text-xl mt-4">
                A Simple open-source blogging platform for developers focused on
                sharing your journey, insights, and projects.
            </p>

            <div className="mt-8 flex justify-center align-middle gap-2">
                <Button asChild variant="default" className="">
                    <Link href="/login">Start Writing</Link>
                </Button>
                <Button asChild variant="link" className="">
                    <Link href="/blogs">Explore Blogs</Link>
                </Button>
            </div>
        </div>
    </section>
);

const Featured =  async () => {

    const prisma = new PrismaClient();

    const blogs = await prisma.blogPost.findMany({
        take: 6,
        orderBy: {
            createdAt: 'desc',
        },
        include: {
            authorUser: {
                select: {
                    name: true,
                },
            },
        },
    });

    return (
        <section className="py-10">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Featured Blog Posts
                </h1>
                <div
                    id="featured-posts"
                    className="grid grid-cols-1 md:grid-cols-12 gap-4"
                >

                   
                {blogs.map((blog) => (
                    <div className="col-span-6 flex flex-col gap-4">
                        <PostCard
                            key={blog.id}
                            title={blog.title}
                            description={blog.description}
                            slug={blog.slug}
                            tags={blog.tags}
                            content={blog.content as JsonArray}
                            authorUser={blog.authorUser}
                            createdAt={blog.createdAt}
                        />
                    </div>
                ))}
                 
                </div>
                <div className="text-center mt-10">
                    <Button asChild variant="default" className="">
                        <Link href="/blogs">See More Blogs</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
