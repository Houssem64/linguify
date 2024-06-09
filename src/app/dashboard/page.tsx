import React from 'react'

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/app/lib/auth'
import UserDashboard from '@/components/UserDashboard/UserDashboard';
import { Toaster } from 'react-hot-toast';

export default async function DashboardPage() {
    const session = await getServerSession(authConfig);
    if (!session || !session.user) {
        redirect("/signin");
    }

    return (
        <>

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
            <UserDashboard />

        </>
    )
}
