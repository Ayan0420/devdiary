// import { Button } from "@/components/ui/button"
// import { Label } from "@/components/ui/label"
// import { Input } from "@/components/ui/input"
// import Link from "next/link"
import { SignInGoogle } from "./signInButtonGoogle";
import { SignInGitHub } from "./signInButtonGithub";
export default function Component() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-4 text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Welcome back!</h1>
        <p className="text-muted-foreground">Sign in to your account to manage your blog posts or create a new one.</p>
      </div>
      <div className="mt-8 w-full max-w-md space-y-4">
        <SignInGoogle />
        <SignInGitHub />
      </div>
    </div>
  )
}
