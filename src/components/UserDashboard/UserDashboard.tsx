"use client";
import { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import UserHome from './UserHome';
import Dashboard from '../Dashboard/Dashboard';
import { Skeleton } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';

import ApplyButton from './ApplyButton';
import Settings from '../Settings/Settings';



const UserDashboard = () => {
    const [activeLink, setActiveLink] = useState('Home');
    return (<div className="flex ">
        <div className="flex w-full ">
            <div className="w-1/4">
                <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} />
            </div>
            <div className="w-3/4 my-5 -translate-x-20 pb-10 ">
                {/*        <div className="items-center flex justify-center mt-4">
                    <Navbar />

                </div> */}
                {activeLink === 'Home' ? (
                    <div className='justify-center items-center text-center' >

                        <div className="bg-gray-600 opacity-10 z-1">

                            <UserHome />

                        </div>
                        <ApplyButton />
                    </div>
                ) : activeLink === 'Tasks' ? (
                    <div>Tasks</div>
                ) : activeLink === 'MyTasks' ? (
                    <Dashboard />
                ) : activeLink === 'Settings' ? (
                    <Settings />) : null}
            </div>
        </div>


        {/*                 <div className="flex mr-5 ml-auto -translate-y-7  gap-3">

         {session ? <Link href="/api/auth/signout?callbackUrl=/" className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4  rounded"> Sign out </Link> : <div></div>}

    </div> */}

    </div>
    );
}

export default UserDashboard;