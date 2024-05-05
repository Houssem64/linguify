"use client";

import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Toaster } from 'react-hot-toast';
import Toast from 'react-hot-toast';
import SignUpForm from "@/components/CredentialsForm/SignUpForm";

export default function SignUp() {

    return (

        <div className="grid min-h-screen grid-cols-1 bg-black lg:grid-cols-2">
            <Toaster toastOptions={{
                className: '',
                style: {
                    border: 'px solid white',
                    boxShadow: '0 0 10px white',
                    padding: '16px',
                    color: 'white',
                    background: 'black',

                },
                iconTheme: {
                    primary: 'white',
                    secondary: 'black',
                },
            }} />
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
                            Create an account
                        </h2>
                        <p className="mt-2 text-center text-sm text-white">
                            Already have an account?{" "}
                            <Link
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                href="#"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                    <SignUpForm />
                    {/*                     <form className="mt-8 space-y-6">
                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    autoComplete="email"
                                    id="email"
                                    name="email"
                                    placeholder="you@example.com"
                                    required
                                    type="email"
                                />
                            </div>
                            <div>
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    autoComplete="current-password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    type="password"
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Checkbox id="remember-me" name="remember-me" />
                                <Label className="ml-2" htmlFor="remember-me">
                                    Remember me
                                </Label>
                            </div>
                            <div className="text-sm">
                                <Link
                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                    href="#"
                                >
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>
                        <div>
                            <Button className="w-full" type="submit">
                                Create account
                            </Button>
                        </div>
                        <div className="flex items-center justify-center">
                            <Button className="w-full" variant="outline">
                                <ChromeIcon className="mr-2 h-5 w-5" />
                                Continue with Google
                            </Button>
                        </div>
                    </form> */}
                </div>
            </div>
        </div>
    );
}

