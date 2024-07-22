
import { signIn } from "@/auth"
import { Button } from "@/components/ui/button"
import { FaGoogle } from "react-icons/fa"
 
export function SignInGoogle() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button variant="outline" className="w-full" type="submit">
        <FaGoogle className="mr-2 h-5 w-5" />
        Signin with Google
      </Button>
    </form>
  )
} 