import React from 'react'
import { SignIn } from "@clerk/nextjs";
import { Toaster } from 'react-hot-toast';
import Link from 'next/link';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <Toaster
        toastOptions={{
          style: {
            border: '1px solid #14a800',
            padding: '16px',
            color: '#14a800',
            background: 'white',
          },
          iconTheme: {
            primary: '#14a800',
            secondary: 'white',
          },
        }}
      />

      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Link href="/" className="flex justify-center">
          <span className="text-3xl font-bold text-[#14a800]">GoLanguify</span>
        </Link>
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Or{' '}
          <Link href="/signup" className="font-medium text-[#14a800] hover:text-[#14a800]/80">
            create a new account
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className=" py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SignIn />
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-sm font-medium text-gray-600 hover:text-[#14a800]">
          Back to home
        </Link>
      </div>
    </div>
  )
}