"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import Footer from "@/components/Footer/Footer";
import { LanguagesIcon } from "lucide-react";
import MainNav from "@/components/Navbar/MainNav";
import Navbar from "@/components/Navbar/Navbar";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import JobDetails from "@/components/JobDetails";
type TranslationJob = {
    id: number;
    title: string;
    description: string;
    category: string;
    skills: string[];
    budget: string;
    deadline: string;
};

const translationJobs: TranslationJob[] = [
    {
        id: 1,
        title: "Translate English to Spanish",
        description: "Need a fluent translator to convert a document from English to Spanish.",
        category: "Writing & Translation",
        skills: ["Translation", "English to Spanish"],
        budget: "$50",
        deadline: "3 days",
    },
    {
        id: 2,
        title: "Proofread French Document",
        description: "Looking for a proofreader to review a French document for errors.",
        category: "Writing & Translation",
        skills: ["Proofreading", "French to English"],
        budget: "$30",
        deadline: "2 days",
    },
    {
        id: 3,
        title: "Content Writing in German",
        description: "Need content written in German for a website.",
        category: "Writing & Translation",
        skills: ["Content Writing", "German"],
        budget: "$100",
        deadline: "1 week",
    },
    // Add more jobs as needed
];

export default function BrowseJobsPage() {
    const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
    return (
        <div className="flex flex-col min-h-[100dvh] bg-white">

            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#14a800]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                                Browse Translation Jobs
                            </h1>
                            <p className="mx-auto max-w-[700px] text-white md:text-xl">
                                Find freelance translation jobs that match your skills and apply to start working.
                            </p>
                            <div className="w-full max-w-sm space-y-2">
                                <Input className="bg-white" placeholder="Search for jobs..." type="search" />
                                <Button className="w-full bg-white text-[#14a800] hover:bg-gray-100">Search Jobs</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="container px-4 md:px-6 mx-auto">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Available Translation Jobs</h2>
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Filter Sidebar */}
                            <aside className="lg:w-1/4">
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h3 className="text-xl font-semibold mb-4">Filters</h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                            <select id="category" className="w-full p-2 border rounded-md bg-gray-300">
                                                <option>All Categories</option>
                                                {/* Add category options */}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                                            <input type="text" id="skills" placeholder="e.g. Spanish, Technical" className="w-full p-2 text-black border rounded-md bg-gray-300" />
                                        </div>
                                        <div>
                                            <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                                            <select id="budget" className="w-full p-2 border rounded-md bg-gray-300">
                                                <option>Any Budget</option>
                                                <option>$5 - $50</option>
                                                <option>$50 - $100</option>
                                                <option>$100 - $200</option>
                                                <option>$200 - $500</option>
                                                <option>$500+</option>
                                            </select>

                                        </div>
                                        <button className="w-full bg-[#14a800] text-white py-2 rounded-md hover:bg-[#118f00] transition-colors">
                                            Apply Filters
                                        </button>
                                    </div>
                                </div>
                            </aside>

                            {/* Job Listings */}
                            <div className="lg:w-3/4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {translationJobs.map((job) => (
                                        <Sheet key={job.id}>
                                            <SheetTrigger asChild>
                                                <Card className="bg-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
                                                    <CardContent className="p-6" onClick={() => setSelectedJobId(job.id)}>
                                                        <h3 className="text-xl font-semibold mb-3 text-gray-800">{job.title}</h3>
                                                        <p className="text-sm mb-3 text-gray-600">{job.description}</p>
                                                        <div className="space-y-2">
                                                            <p className="text-sm"><span className="font-medium">Category:</span> {job.category}</p>
                                                            <p className="text-sm"><span className="font-medium">Skills:</span> {job.skills.join(", ")}</p>
                                                            <p className="text-sm"><span className="font-medium">Budget:</span> {job.budget}</p>
                                                            <p className="text-sm"><span className="font-medium">Deadline:</span> {job.deadline}</p>
                                                        </div>
                                                        <Button
                                                            className="mt-4 bg-[#14a800] text-white hover:bg-[#118f00] transition-colors"
                                                        >
                                                            View Details
                                                        </Button>
                                                    </CardContent>
                                                </Card>
                                            </SheetTrigger>
                                            <SheetContent className="w-[800px]">
                                                {selectedJobId === job.id && <JobDetails job={job} />}
                                            </SheetContent>
                                        </Sheet>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
