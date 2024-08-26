import PostCard from "@/app/PostCard";
import { Button } from "@/components/ui/button";
import Image from "next/image";
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

const Featured = () => {
    return (
        <section className="py-10">
            <div className="container mx-auto">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Featured Blog Posts
                </h1>
                <div
                    id="featured-posts"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-4"
                ></div>
                <div className="text-center mt-10">
                    <Button asChild variant="default" className="">
                        <Link href="/blogs">See More Blogs</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};
