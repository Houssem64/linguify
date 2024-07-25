import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

export default function UserHome() {
    const { user } = useUser();
    const text = "Manage your active tasks, metrics, and customer feedback.".split(" ");

    return (
        <div className="flex flex-col">
            <main className="flex-1 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
                            Welcome, {user?.firstName}!
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 dark:text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
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
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {[
                                { title: "Active Tasks", description: "View and manage your active Tasks.", count: 12, link: "View Tasks" },
                                { title: "Completed Tasks", description: "Track the success of your Completed Tasks.", count: 48, link: "View Completed Tasks" },
                                { title: "Translation Score", description: "Dive into your performance metrics.", count: "98%", link: "View Analytics" },
                                { title: "Active Projects", description: "View and manage your active projects.", count: 12, link: "View Projects" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="h-full">
                                        <CardHeader>
                                            <CardTitle className="text-xl font-semibold text-gray-900 dark:text-white">{item.title}</CardTitle>
                                            <CardDescription className="text-gray-500 dark:text-gray-300">{item.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="text-4xl font-bold text-[#14a800]">{item.count}</div>
                                        </CardContent>
                                        <CardFooter>
                                            <Link href="#" className="text-[#14a800] hover:text-[#14a800]/80 font-medium">
                                                {item.link}
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