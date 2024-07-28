"use client";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

import Settings from "../Settings/Settings";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import FindWorkPage from "./FindWork/page";
import Reports from "./Reports";
import ProfilePage from "./profile/Profile";
import MyJobs from "./Jobs";

const UserDashboard = () => {
    const [activeLink, setActiveLink] = useState("Find Work");
    const router = useRouter();
    return (
        <div className="flex flex-col min-h-screen bg-white">
            <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
            <div className="flex flex-1">
                {/* <Sidebar activeLink={activeLink} setActiveLink={setActiveLink} /> */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto">
                    <div className="container mx-auto px-4 py-6">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                            {activeLink}
                        </h1>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeLink === "Find Work" && <FindWorkPage />}
                            {activeLink === "My Jobs" && <MyJobs />}
                            {activeLink === "Reports" && <Reports />}
                            {activeLink === "Settings" && <Settings />}
                            {activeLink === "My Profile" && <ProfilePage />}

                        </motion.div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default UserDashboard;