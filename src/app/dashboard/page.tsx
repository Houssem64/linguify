import React from 'react'



import UserDashboard from '@/components/UserDashboard/UserDashboard';
import { Toaster } from 'react-hot-toast';


export default async function DashboardPage() {

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
