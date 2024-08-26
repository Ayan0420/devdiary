import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { JsonArray } from "@prisma/client/runtime/library";
import Image from "next/image";
import Link from "next/link";
import { FaComments, FaEye, FaThumbsUp } from "react-icons/fa";

interface Post {
    title: string;
    description: string;
    slug: string;
    content: JsonArray;
}

const PostCard: React.FC<Post> = ({ title, description, slug, content }) => {
    console.log(content);
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>
                    <Link
                        href={`/blogs/${slug}`}
                        className="hover:text-slate-600"
                    >
                        {title}
                    </Link>
                </CardTitle>
                <CardDescription>
                    by{" "}
                    <Link className="underline" href={"#"}>
                        John Doe
                    </Link>
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col-reverse md:flex-row">
                <p className="w-full">{description}</p>
                <Image
                    src="https://placehold.co/1080x720"
                    alt="image"
                    width={200}
                    height={200}
                    className=" md:max-h-[130px] rounded-xl"
                />
            </CardContent>

            <CardFooter className="flex flex-col-reverse md:flex-row items-start md:items-center md:justify-between gap-4">
                <div className="text-muted-foreground text-sm flex items-center gap-4">
                    <div className="flex items-center gap-1">
                        <FaEye className="" />
                        <span>200</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaThumbsUp className="" />
                        <span>100</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaComments className="" />
                        <span>50</span>
                    </div>
                </div>

                <div className="flex gap-2 flex-wrap justify-end">
                    <Tag href="#" tag="Next.js" />
                    <Tag href="#" tag="Docker" />
                    <Tag href="#" tag="AWS EC2" />
                    <Tag href="#" tag="Github Actions" />
                </div>
            </CardFooter>
        </Card>
    );
};

export default PostCard;

function Tag({ href, tag }: { href: string; tag: string }) {
    return (
        <Link
            href={href}
            className="bg-secondary px-3 py-1 text-secondary-foreground text-xs rounded-full"
        >
            #{tag}
        </Link>
    );
}
