import React from 'react'

import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'
import { authConfig } from '@/app/lib/auth'
import UserDashboard from '@/components/UserDashboard/UserDashboard';

export default async function DashboardPage() {
    const session = await getServerSession(authConfig);
    if (!session || !session.user) {
        redirect("/signin");
    }

    return (
        <>
            <UserDashboard />

        </>
    )
}
