"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import Footer from "@/components/Footer/Footer";
import { LanguagesIcon } from "lucide-react";
import MainNav from "@/components/Navbar/MainNav";

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
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-2xl font-bold mb-6">Available Translation Jobs</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {translationJobs.map((job) => (
                                <Card key={job.id} className="hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
                                        <p className="text-sm mb-2">{job.description}</p>
                                        <p className="text-sm mb-2">Category: {job.category}</p>
                                        <p className="text-sm mb-2">Skills: {job.skills.join(", ")}</p>
                                        <p className="text-sm mb-2">Budget: {job.budget}</p>
                                        <p className="text-sm mb-2">Deadline: {job.deadline}</p>
                                        <Link className="text-[#14a800] hover:underline" href={`/job/${job.id}`}>
                                            View Details
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}
