"use client";
import { LanguagesIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";




const MainNav = () => {
    return (<header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-200">
        <Link href="/" className="flex">
            <LanguagesIcon className="h-6 w-6 text-green-500 mr-2 " />
            <span className="text-xl font-bold font-sans mr-1 text-green-500">GO</span> <span className="text-xl  font-sans font-bold text-green-500 ">LANGUIFY</span>
        </Link>
        <nav className="ml-auto hidden lg:flex gap-4">
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="/dashboard/find-work">Find Work</Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#">Find Talent</Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-gray-900" href="/about-us">Why GoLanguify</Link>
        </nav>
        <div className="ml-auto flex gap-2">
            <Link href="/signin"> <Button variant="ghost" >Log In</Button> </Link>
            <Link href="/signup">  <Button className="bg-[#14a800] hover:bg-[#14a800]/90">Sign Up</Button> </Link>
        </div>
    </header>);
}

export default MainNav;