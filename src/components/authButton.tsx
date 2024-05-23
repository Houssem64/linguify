"use client";


import GoogleIcon from '@mui/icons-material/Google';
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";


export function GoogleSignInButton() {
    const handleClick = () => {
        signIn("google", { callbackUrl: "/dashboard" });
    };

    return (
        <Button className="w-full" variant="outline" onClick={handleClick}>
            <GoogleIcon className="mx-2" />
            Continue with Google
        </Button>
    );
}





export function CredentialsSignInButton() {
    const handleClick = () => {
        signIn("credentials");
    };


    return (
        <div>
            <Button className="w-full" type="submit" onClick={handleClick}>
                Sign in
            </Button>
        </div>
    );
}