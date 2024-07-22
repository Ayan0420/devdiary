
import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { FaGithub } from "react-icons/fa"
 
export function SignInGitHub() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("github")
      }}
    >
      <Button variant="outline" className="w-full" type="submit">
        <FaGithub className="mr-2 h-5 w-5" />
        Signin with Github
      </Button>
    </form>
  )
} 