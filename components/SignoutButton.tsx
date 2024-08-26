"use client";
import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import toast from "react-hot-toast";

export function SignOut() {
    const handleSignOut = () => {
        signOut();
        toast.success("Signed out!");
    };

    return (
        <Button variant={"outline"} onClick={handleSignOut}>
            Signout
        </Button>
    );
}
