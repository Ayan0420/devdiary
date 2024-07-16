import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FaGoogle } from "react-icons/fa";
export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Create New Account!</h1>
        <p className="text-muted-foreground">Create a new account to start blogging and share your thoughts with the world.</p>
      </div>
      <div className="mt-8 w-full max-w-md space-y-4">
        <Button variant="outline" className="w-full">
          <FaGoogle className="mr-2 h-5 w-5" />
          Sign up with Google
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or register with</span>
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" placeholder="john_doe" required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
        <div className="text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Link href="/register" className="font-medium underline underline-offset-4" prefetch={false}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  )
}
