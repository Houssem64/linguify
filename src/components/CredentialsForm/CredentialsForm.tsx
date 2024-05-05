"use client";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CredentialsSignInButton } from "@/components/authButton";
import React, { useState } from "react";
import { ChangeEvent } from "react";


import toast, { Toaster } from 'react-hot-toast';


interface CredentialsFormProps {
    csrfToken?: string;
}

export default function CredentialsForm({ csrfToken }: CredentialsFormProps) {
    const router = useRouter();
    /*     const router = useRouter();
    
        const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
    
            const data = new FormData(e.currentTarget);
    
            const email = data.get("email");
            const password = data.get("password");
    
            // Optional: Add validation or assertion if email or password could be null
            if (!email || !password) {
                toast.error('Please enter both email and password.');
                return;
            }
            const signInResponse = await signIn("credentials", {
                redirect: false,
                email: email.toString(), // Convert to string to ensure correct type
                password: password.toString(),
            });
    
    
            if (signInResponse && !signInResponse.error) {
                // redirect to dashboard
                router.push("/dashboard");
            } else {
                toast.error('Credentials are invalid. Please try again.')
    
            }
        };
     */
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Optional: Add validation or assertion if email or password could be null
        if (!email || !password) {
            toast.error('Please enter both email and password.');
            return;
        }

        const signInResponse = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (signInResponse?.error) {
            toast.error('Credentials are invalid. Please try again.');
        } else {
            // Assuming successful sign-in, redirect or perform other actions as needed
            toast.success('Sign-in successful');
            router.push("/dashboard");
            // Redirect logic here, if applicable
        }
    };

    return (
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
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
            <div className="-space-y-px rounded-md shadow-sm">
                <div>
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        autoComplete="email"
                        id="email"
                        name="email"
                        placeholder="you@example.com"
                        required
                        onChange={handleEmailChange}
                        value={email}
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
                        onChange={handlePasswordChange}
                        required
                        value={password}
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
    )
}

