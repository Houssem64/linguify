
import React from "react";
import CredentialsForm from "../CredentialsForm/CredentialsForm";
import { getServerSession } from "next-auth";
import { authConfig } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import { getCsrfToken } from "next-auth/react";
import {
    CredentialsSignInButton,

    GoogleSignInButton,
} from "@/components/authButton";
export default async function SignIn() {
    const session = await getServerSession(authConfig);
    console.log(session, session);
    if (session) {
        return redirect("/dashboard")

    }
    return (

        <div className="grid min-h-screen grid-cols-1 bg-black lg:grid-cols-2">

            <div className="relative hidden bg-gray-900 lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-90" />
                <div className="relative z-10 flex h-full items-center justify-center px-12">
                    <div className="space-y-6 text-center text-white">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Welcome to our platform
                        </h1>
                        <p className="text-lg">
                            Discover the power of our tools and services to take your business
                            to the next level.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-white">
                            Don't have an account?

                        </p>
                    </div>
                    <CredentialsForm />
                    <GoogleSignInButton />
                </div>
            </div>
        </div>
    );
}


