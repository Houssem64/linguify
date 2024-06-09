"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";

import toast, { Toaster } from "react-hot-toast";
import { GoogleSignInButton } from "@/components/authButton";
import React, { ChangeEvent, useState } from "react";

interface FormData {
    name?: string;
    email?: string;
    password?: string;
    phoneNumber?: string;
    // Add other form fields as needed
}


const SignUpForm = () => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({});
    const [errorMessage, setErrorMessage] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData)
        setErrorMessage("")
        const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),


        });
        if (!res.ok) {
            const data = await res.json();
            setErrorMessage(data.message)
            toast.error('Credentials are invalid. Please try again.')
        }
        else {
            router.refresh();
            router.push("/signin");

        }
    }
    // const data = new FormData(e.currentTarget);
    // const signInResponse = await signIn("credentials", {
    //     email: data.get("email"),
    //     password: data.get("password"),
    //     redirect: false,
    // });
    // if (signInResponse && !signInResponse.error) {
    //     // redirect to dashboard
    //     router.push("/dashboard");
    // } else {
    //     toast.error('Credentials are invalid. Please try again.')
    // }

    return (<form className="mt-8 space-y-6" onSubmit={handleSubmit} method="post">
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
                <Label htmlFor="name">Full Name</Label>
                <Input
                    autoComplete="name"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    type="text"
                    onChange={handleChange}
                    value={formData.name}
                />
            </div>
            <div>
                <Label htmlFor="email">Email address</Label>
                <Input
                    autoComplete="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                    type="email"
                    onChange={handleChange}
                    value={formData.email}
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
                    onChange={handleChange}
                    value={formData.password}
                />
            </div>
            <div>
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input
                    autoComplete="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    required
                    type="tel"
                    onChange={handleChange}
                    value={formData.phoneNumber}
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
            <input className="w-full" type="submit" value="Create account" />


        </div>
        <div className="flex items-center justify-center">
            <GoogleSignInButton />
        </div>
    </form>);
}

export default SignUpForm;