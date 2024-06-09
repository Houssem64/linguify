"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {GoogleSignInButton,} from "@/components/authButton";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";



export default function SignIn() {

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false,
        }).then((callback) => {
            setIsLoading(false);
            if (callback?.ok) {
                toast.success('Logged in successfully');
                router.refresh();

            }
            if (callback?.error) {
                toast.error("Invalid credentials. Please try again.");
            }
        })
    };


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
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-white">
                            Don't have an account? <a href="/signup" className="text-blue-500">Sign up</a>
                        </p>
                    </div>
                    {/*   <CredentialsForm /> */}
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} >

                        <div className="-space-y-px rounded-md shadow-sm">
                            <div>
                                <Label htmlFor="email">Email address</Label>
                                <Input
                                    {...register('email', { required: true })}
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
                                    {...register('password', { required: true })}
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
                            <Button className="w-full" type="submit" >
                                Sign in
                            </Button>
                        </div>
                        {/* <CredentialsSignInButton /> */}
                        {/*             <div className="flex flex-col gap-2">
                <GoogleSignInButton />
            </div> */}
                    </form>
                    <GoogleSignInButton />
                </div>
            </div>
        </div>
    );
}


