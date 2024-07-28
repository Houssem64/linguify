import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiClock, FiBarChart2, FiFolder } from 'react-icons/fi';

export default function Reports() {
    const { user } = useUser();
    const text = "Manage your active tasks, metrics, and customer feedback.".split(" ");

    return (
        <div className="flex flex-col min-h-screen bg-[#f2f7f2]">
            <main className="flex-1">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-left mb-12"
                    >
                        <h1 className="text-3xl font-bold text-[#001e00] sm:text-4xl md:text-5xl">
                            Welcome back, {user?.firstName}!
                        </h1>
                        <p className="mt-3 max-w-2xl text-base text-[#5e6d55] sm:text-lg md:mt-5 md:text-xl">
                            {text.map((el, i) => (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i / 20
                                    }}
                                    key={i}
                                >
                                    {el}{" "}
                                </motion.span>
                            ))}
                        </p>
                    </motion.div>

                    <div className="mt-10">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: "Active Tasks", description: "View and manage your active Tasks.", count: 12, link: "View Tasks", icon: FiClock },
                                { title: "Completed Tasks", description: "Track the success of your Completed Tasks.", count: 48, link: "View Completed Tasks", icon: FiCheckCircle },
                                { title: "Translation Score", description: "Dive into your performance metrics.", count: "98%", link: "View Analytics", icon: FiBarChart2 },
                                { title: "Active Projects", description: "View and manage your active projects.", count: 12, link: "View Projects", icon: FiFolder },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <CardHeader>
                                            <div className="flex items-center space-x-3">
                                                <item.icon className="w-6 h-6 text-[#14a800]" />
                                                <CardTitle className="text-lg font-semibold text-[#001e00]">{item.title}</CardTitle>
                                            </div>
                                            <CardDescription className="text-[#5e6d55] mt-2">{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-3xl font-bold text-[#14a800]">{item.count}</div>
                                        </CardContent>
                                        <CardFooter>
                                            <Link href="#" className="text-[#14a800] hover:text-[#14a800]/80 font-medium flex items-center">
                                                {item.link}
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}