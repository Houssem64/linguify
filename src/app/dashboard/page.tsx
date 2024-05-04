import React from 'react'
import Dashboard from '@/components/Dashboard/Dashboard'
import { Navbar } from '@/components/Navbar/Navbar'
import ProfileAvatar from '@/components/Navbar/Avatar'
import { ModeToggle } from '@/components/mode-toggle'
import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/app/lib/auth'
export default async function DashboardPage() {
    const session = await getServerSession(authConfig);
    if (!session || !session.user) {
        redirect("/signin");
    }
    return (
        <>
            <div className="flex flex-col mt-3 ">
                <div className=" flex justify-center items-center">
                    <Navbar />
                </div>

                <div className="flex mr-5 ml-auto -translate-y-7  gap-3">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded"> Sign in </button>
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4  rounded"> Sign up </button>
                    <ProfileAvatar />
                    <ModeToggle />
                </div>
            </div>
            <Dashboard />
        </>
    )
}
