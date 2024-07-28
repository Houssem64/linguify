import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { useUser } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiClock, FiStar, FiCheckCircle } from 'react-icons/fi';

export default function MyJobs() {
    const { user } = useUser();
    const jobs = [
        { id: 1, title: "English to Spanish Translation", client: "Global Corp", rate: "$0.12/word", status: "In Progress", dueDate: "2024-08-15", wordCount: 5000 },
        { id: 2, title: "Technical Document Localization", client: "Tech Innovators", rate: "$0.15/word", status: "Completed", dueDate: "2024-07-30", wordCount: 3000 },
        { id: 3, title: "Marketing Content Translation", client: "Brand Builders", rate: "$0.10/word", status: "In Progress", dueDate: "2024-08-20", wordCount: 7000 },
        { id: 4, title: "Legal Document Translation", client: "Law Firm LLC", rate: "$0.18/word", status: "Not Started", dueDate: "2024-09-01", wordCount: 4000 },
    ];

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
                            My Jobs
                        </h1>
                        <p className="mt-3 max-w-2xl text-base text-[#5e6d55] sm:text-lg md:mt-5 md:text-xl">
                            Manage and track your current translation projects.
                        </p>
                    </motion.div>

                    <div className="mt-10">
                        <div className="space-y-6">
                            {jobs.map((job, index) => (
                                <motion.div
                                    key={job.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <CardHeader>
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <CardTitle className="text-xl font-semibold text-[#001e00]">{job.title}</CardTitle>
                                                    <CardDescription className="text-[#5e6d55] mt-1">Client: {job.client}</CardDescription>
                                                </div>
                                                <Button variant="outline" className="text-[#14a800] border-[#14a800] hover:bg-[#14a800] hover:text-white">
                                                    View Job
                                                </Button>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                <div className="flex items-center space-x-2">
                                                    <FiDollarSign className="text-[#14a800]" />
                                                    <span className="text-[#5e6d55]">{job.rate}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <FiClock className="text-[#14a800]" />
                                                    <span className="text-[#5e6d55]">Due: {job.dueDate}</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <FiStar className="text-[#14a800]" />
                                                    <span className="text-[#5e6d55]">{job.wordCount} words</span>
                                                </div>
                                                <div className="flex items-center space-x-2">
                                                    <FiCheckCircle className="text-[#14a800]" />
                                                    <span className="text-[#5e6d55]">{job.status}</span>
                                                </div>
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex justify-end space-x-2">
                                            <Button variant="ghost" className="text-[#5e6d55] hover:text-[#001e00]">
                                                Message Client
                                            </Button>
                                            <Button className="bg-[#14a800] text-white hover:bg-[#14a800]/80">
                                                Submit Work
                                            </Button>
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