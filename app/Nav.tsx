import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/ModeToggle";
import { auth } from "@/auth";
import { FaPenNib } from "react-icons/fa";

export default function Nav() {
    return (
        <header className="bg-primary-foreground dark:bg-primary-foreground-dark flex h-20 w-full shrink-0 items-center px-4 md:px-6">
            <Sheet>
                <SheetTrigger asChild className="w-full">
                    <div className="flex justify-between lg:hidden">
                        <AppLogo />
                        <Button variant="outline" size="icon">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">
                                Toggle navigation menu
                            </span>
                        </Button>
                    </div>
                </SheetTrigger>
                <SheetContent side="left" className="w-[10rem]">
                    <div className="grid gap-2 py-6">
                        <NavLinks />
                        <ModeToggle />
                    </div>
                </SheetContent>
            </Sheet>
            <Link href="/" className="mr-6 hidden lg:flex" prefetch={false}>
                <AppLogo />
                <span className="sr-only">DevDiary</span>
            </Link>

            <NavLinks />
        </header>
    );
}

const NavLinks = async () => {
    // to get the user session
    const session = await auth();

    console.log("session", session);

    return (
        <>
            <nav className="hidden lg:flex gap-4 align-middle mx-auto">
                <NavLink href="/" text="Home" />
                <NavLink href="/blogs" text="Blogs" />

                <Button asChild className="">
                    <Link href="/blogs/new">
                        <FaPenNib className="mr-2 h-4 w-4" />
                        Write
                    </Link>
                </Button>
            </nav>
            <div className="hidden lg:flex gap-3">
                {!session?.user ? (
                    <NavLink href="/login" text="Sign In" />
                ) : (
                    <ProfileNav
                        href="/profile"
                        text="Profile"
                        user={session.user}
                    />
                )}
                <ModeToggle />
            </div>
        </>
    );
};

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import Image from "next/image";
import { SignOut } from "@/components/SignoutButton";

const ProfileNav = ({
    href,
    text,
    user,
}: {
    href: string;
    text: string;
    user: any;
}) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Image
                    src={user.image}
                    alt={user.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="hover:cursor-pointer">
                    <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="justify-center">
                    <SignOut />
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

function NavLink({ href, text }: { href: string; text: string }) {
    return (
        <Link
            href={href}
            className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-100 hover:text-stone-900 focus:bg-stone-100 focus:text-stone-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:hover:bg-stone-800 dark:hover:text-stone-50 dark:focus:bg-transparent dark:focus:text-stone-50"
            prefetch={false}
        >
            {text}
        </Link>
    );
}

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    );
}

function AppLogo() {
    return (
        <h1 className="text-3xl font-bold tracking-tight text-primary dark:text-primary-foreground-dark">
            DevDiary
        </h1>
    );
}
