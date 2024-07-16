"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const  metadata = {
  title: "Not Found",
  description: "Not Found",
}

const error = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-[20rem] text-center flex flex-col gap-3">
        <div>
          <Image src="/not-found.png" alt="404" width={500} height={500} />
          <h2 className="text-4xl">Not found!</h2>
        </div>
        <p>The page you are looking for does not exist.</p>
        <Button asChild variant={"outline"}>
          <Link className="" href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}

export default error