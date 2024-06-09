"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast, { Toaster } from "react-hot-toast";
import { GoogleSignInButton } from "@/components/authButton";
import React, { ChangeEvent, useState } from "react";
import axios from "axios";




const SignUpForm = () => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();




    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data)
            .then(() => {
                toast.success('Account created successfully')

            })
            .catch((error) => {
                toast.error('Something went wrong')
            })
            .finally(() => {
                setIsLoading(false);
                router.push('/signin')
            });

    }




    /*     const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            const { name, value } = e.target;
            setFormData((prevState) => ({ ...prevState, [name]: value }));
        } */
    /*  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
     } */
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

    return (<form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)} method="post">
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



                />
            </div>
            <div>
                <Label htmlFor="email">Email address</Label>
                <Input

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
            <input className="w-full" type="submit" value="Create account" />


        </div>
        <div className="flex items-center justify-center">
            <GoogleSignInButton />
        </div>
    </form>);
}

export default SignUpForm;