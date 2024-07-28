"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CardContent, Card } from "@/components/ui/card";

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

        <footer className="bg-gray-100 py-6 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link className="flex items-center" href="#">
                            <span className="text-xl font-bold text-[#14a800]">GoLanguify</span>
                        </Link>
                        <p className="mt-2 text-sm text-gray-600">Connecting linguists with opportunities worldwide.</p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">For Clients</h3>
                        <ul className="space-y-2">
                            <li><Link className="text-sm text-gray-600 hover:text-[#14a800]" href="#">How to Hire</Link></li>
                            <li><Link className="text-sm text-gray-600 hover:text-[#14a800]" href="#">Talent Marketplace</Link></li>
                            <li><Link className="text-sm text-gray-600 hover:text-[#14a800]" href="#">Project Catalog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">For Translators</h3>
                        <ul className="space-y-2">
                            <li><Link className="text-sm text-gray-600 hover:text-[#14a800]" href="#">How to Find Work</Link></li>
                            <li><Link className="text-sm text-gray-600 hover:text-[#14a800]" href="#">Direct Contracts</Link></li>
                            <li><Link className="text-sm text-gray-600 hover:text-[#14a800]" href="#">Learning Center</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-2">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link className="text-sm text-gray-600 hover:text-[#14a800]" href="#">Help & Support</Link></li>
                            <li><Link className="text-sm text-gray-600 hover:text-[#14a800]" href="#">Success Stories</Link></li>
                            <li><Link className="text-sm text-gray-600 hover:text-[#14a800]" href="#">Blog</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-sm text-gray-600">© 2024 GoLanguify Inc. All rights reserved.</div>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <Link className="text-sm text-gray-600 hover:text-[#14a800]" href="/terms-of-service">Terms of Service</Link>
                        <Link className="text-sm text-gray-600 hover:text-[#14a800]" href="/privacy-policy">Privacy Policy</Link>
                        <Link className="text-sm text-gray-600 hover:text-[#14a800]" href="#">Accessibility</Link>
                    </div>
                </div>
            </div>
        </footer>

    )
}