"use client";
import { useState } from "react";
import Link from "next/link";
import { useUser } from '@clerk/clerk-react';
import { SignOutButton } from "@clerk/nextjs";
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import AssessmentIcon from '@mui/icons-material/Assessment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MessageIcon from '@mui/icons-material/Message';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Dispatch, SetStateAction } from 'react';
import { LanguagesIcon } from "lucide-react";
import ProfileAvatar from "./Avatar";
import NotificationComponent from "../Notification";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
interface NavbarProps {
    activeLink: string;
    setActiveLink: Dispatch<SetStateAction<string>>;
}

const Navbar: React.FC<NavbarProps> = ({ activeLink, setActiveLink }) => {
    const { user } = useUser();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">

                        <div className="flex-shrink-0 flex items-center -translate-x-20">
                            <Link href="/" className="flex">
                                <LanguagesIcon className="h-6 w-6 text-green-500 mr-2 " />
                                <span className="text-xl font-bold font-sans mr-1 text-green-500">GO</span> <span className="text-xl  font-sans font-bold text-green-500 ">LANGUIFY</span>
                            </Link>
                        </div>

                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link
                                href="#"
                                onClick={() => setActiveLink('Find Work')}
                                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeLink === 'Find Work'
                                    ? 'border-green-500 text-gray-900'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                            >
                                <SearchIcon className="mr-1 h-5 w-5" />
                                Find Work
                            </Link>
                            <Link
                                href="#"
                                onClick={() => setActiveLink('My Jobs')}
                                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeLink === 'My Jobs'
                                    ? 'border-green-500 text-gray-900'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                            >
                                <WorkIcon className="mr-1 h-5 w-5" />
                                My Jobs
                            </Link>
                            <Link
                                href="#"
                                onClick={() => setActiveLink('Reports')}
                                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeLink === 'Reports'
                                    ? 'border-green-500 text-gray-900'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                            >
                                <AssessmentIcon className="mr-1 h-5 w-5" />
                                Reports
                            </Link>
                            <Link
                                href="#"
                                onClick={() => setActiveLink('My Profile')}
                                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${activeLink === 'My Profile'
                                    ? 'border-green-500 text-gray-900'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                    }`}
                            >
                                <AccountBoxIcon className="mr-1 h-5 w-5" />
                                My Profile
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            <NotificationComponent />
                        </button>
                        <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            <MessageIcon className="h-6 w-6" />
                        </button>
                        <button className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                            <HelpOutlineIcon className="h-6 w-6" />
                        </button>
                        <div className="ml-3 relative">
                            <ProfileAvatar />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;