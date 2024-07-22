import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle";
import { FaPenNib } from "react-icons/fa";

export default function Nav() {
  return (
    <header className="bg-primary-foreground dark:bg-primary-foreground-dark flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild className="w-full">
            <div className="flex justify-between lg:hidden">  
                <AppLogo />
                <Button variant="outline" size="icon" >
                    <MenuIcon className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
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
      <nav className="hidden lg:flex gap-4 align-middle mx-auto">
        <NavLinks />
      </nav>
      <div className="hidden lg:flex">
        <ModeToggle />
      </div>
    </header>
  )
}

function NavLink({ href, text }: { href: string; text: string }) {
  return (
    <Link
      href={href}
      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-stone-100 hover:text-stone-900 focus:bg-stone-100 focus:text-stone-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 dark:bg-transparent dark:hover:bg-stone-800 dark:hover:text-stone-50 dark:focus:bg-transparent dark:focus:text-stone-50"
      prefetch={false}
    >
      {text}
    </Link>
  )
}

function NavLinks() {
  return (
    <>
      <NavLink href="/" text="Home" />
      <NavLink href="/blogs" text="Blogs" />
      <NavLink href="/login" text="Sign In" />
      <Button asChild className="">
        <Link href="/blogs/new">
          <FaPenNib className="mr-2 h-4 w-4" />Write
        </Link>
      </Button>
    </>
  )
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
  )
}


function AppLogo() {
  return (
    <h1 className="text-3xl font-bold tracking-tight text-primary dark:text-primary-foreground-dark">
      DevDiary
    </h1>
  )
}
