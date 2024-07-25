"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";
import Footer from "@/components/Footer/Footer";
import { LanguagesIcon } from "lucide-react";
import MainNav from "@/components/Navbar/MainNav";

type JobCategory = "Writing & Translation" | "Design & Creative" | "Sales & Marketing" | "Admin Support";

const jobCategories: JobCategory[] = [
    "Writing & Translation",
    "Design & Creative",
    "Sales & Marketing",
    "Admin Support"
];

const popularSkills: string[] = [
    "Translation",
    "English to Spanish",
    "French to English",
    "Proofreading",
    "Editing",
    "Content Writing",
    "Copywriting"
];

export default function LandingPage() {
    return (
        <div className="flex flex-col min-h-[100dvh] bg-white">
            <MainNav />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-[#14a800]">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                                Find the perfect translator for your project
                            </h1>
                            <p className="mx-auto max-w-[700px] text-white md:text-xl">
                                GoLanguify connects you with skilled translators for any language pair.
                            </p>
                            <div className="w-full max-w-sm space-y-2">
                                <Input className="bg-white" placeholder="Search for translators..." type="search" />
                                <Button className="w-full bg-white text-[#14a800] hover:bg-gray-100">Find Translators</Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-2xl font-bold mb-6">Browse top job categories</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {jobCategories.map((category) => (
                                <Card key={category} className="hover:shadow-lg transition-shadow">
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-semibold mb-2">{category}</h3>
                                        <Link className="text-[#14a800] hover:underline" href="#">
                                            Find jobs
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-2xl font-bold mb-6">Popular translation skills</h2>
                        <div className="flex flex-wrap gap-2">
                            {popularSkills.map((skill) => (
                                <Button key={skill} variant="outline" className="rounded-full">
                                    {skill}
                                </Button>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}