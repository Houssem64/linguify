"use client";
import Link from "next/link"
import { useUser } from '@clerk/clerk-react';
import { SignOutButton } from "@clerk/nextjs";
import { Dispatch, SetStateAction } from "react";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import WorkIcon from '@mui/icons-material/Work';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ProfileAvatar from "../Navbar/Avatar";

interface SidebarProps {
    activeLink: string;
    setActiveLink: Dispatch<SetStateAction<string>>;
}

export default function Sidebar({ activeLink, setActiveLink }: SidebarProps) {
    const { user } = useUser();

    return (
        <aside className="w-64 h-full bg-gray-100 border-r border-gray-300">
            <div className="p-4">
                <div className="flex items-center mb-6">
                    <ProfileAvatar />
                    <div>
                        <h2 className="font-semibold text-sm">{user?.firstName}</h2>
                        <p className="text-xs text-gray-600">Freelancer</p>
                    </div>
                </div>
                <nav>
                    <Link href="#" onClick={() => setActiveLink('Find Work')} className={`flex items-center py-2 px-4 rounded-md mb-1 ${activeLink === 'Find Work' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-200'}`}>
                        <SearchIcon className="mr-3 h-5 w-5" />
                        Find Work
                    </Link>
                    <Link href="#" onClick={() => setActiveLink('My Jobs')} className={`flex items-center py-2 px-4 rounded-md mb-1 ${activeLink === 'My Jobs' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-200'}`}>
                        <WorkIcon className="mr-3 h-5 w-5" />
                        My Jobs
                    </Link>
                    <Link href="#" onClick={() => setActiveLink('Reports')} className={`flex items-center py-2 px-4 rounded-md mb-1 ${activeLink === 'Reports' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-200'}`}>
                        <AssessmentIcon className="mr-3 h-5 w-5" />
                        Reports
                    </Link>
                    <Link href="#" onClick={() => setActiveLink('Settings')} className={`flex items-center py-2 px-4 rounded-md mb-1 ${activeLink === 'Settings' ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:bg-gray-200'}`}>
                        <SettingsIcon className="mr-3 h-5 w-5" />
                        Settings
                    </Link>
                </nav>
            </div>
            <div className="absolute bottom-4 left-4">
                <SignOutButton>
                    <button className="flex items-center text-gray-700 hover:text-gray-900">
                        <ExitToAppIcon className="mr-2 h-5 w-5" />
                        Sign Out
                    </button>
                </SignOutButton>
            </div>
        </aside>
    )
}