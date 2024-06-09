"use client";
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { CollapsibleTrigger, CollapsibleContent, Collapsible } from "@/components/ui/collapsible"
import { Badge } from "@/components/ui/badge"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import { ModeToggle } from "@/components/mode-toggle";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";

export default function LandingPage() {
    return (
        <div key="1" className="flex flex-col min-h-[100dvh] ">
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link className="flex items-center justify-center" href="#">
                    <LanguagesIcon className="h-6 w-6" />
                    <span className="text-xl font-bold">Linguify</span>
                </Link>
                {/*       <NavigationMenu className="ml-auto hidden lg:flex">
                    <NavigationMenuList>
                        <NavigationMenuLink asChild>
                            <Link
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50  dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="#"
                            >
                                Features
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="#"
                            >
                                How It Works
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="#"
                            >
                                Testimonials
                            </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                            <Link
                                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
                                href="#"
                            >
                                Contact
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuList>
                </NavigationMenu> */}
                <NavigationMenu className="ml-auto hidden lg:flex">

                    <Navbar />
                </NavigationMenu>
                <div className="ml-auto  gap-2 hidden lg:flex">
                    <Button variant="outline"><Link href="/signin">Sign In</Link></Button>
                    <Button><Link href="/signup">Sign Up</Link></Button>
                    <ModeToggle />
                </div>
        {/*         <Sheet>
                    <SheetTrigger asChild>
                        <Button className="ml-auto lg:hidden" size="icon" variant="outline">
                            <MenuIcon className="h-6 w-6" />
                            <span className="sr-only">Toggle navigation menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left">
                        <Link href="#">
                            <LanguagesIcon className="h-6 w-6" />
                            <span className="sr-only">Linguify</span>
                        </Link>
                        <div className="grid gap-2 py-6">
                            <NavigationMenuLink asChild>
                                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                                    Features
                                </Link>
                            </NavigationMenuLink>
                            <Collapsible className="grid gap-4">
                                <CollapsibleTrigger className="flex w-full items-center text-lg font-semibold [&[data-state=open]>svg]:rotate-90">
                                    How It Works
                                    <ChevronRightIcon className="ml-auto h-5 w-5 transition-all" />
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <div className="-mx-6 grid gap-6 bg-gray-100 p-6 dark:bg-gray-800">
                                        <NavigationMenuLink asChild>
                                            <Link className="group grid h-auto w-full justify-start gap-1" href="#">
                                                <div className="text-sm font-medium leading-none group-hover:underline">Sign Up</div>
                                                <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                    Create your Linguify account and build your profile as a translator.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link className="group grid h-auto w-full justify-start gap-1" href="#">
                                                <div className="text-sm font-medium leading-none group-hover:underline">
                                                    Browse Translation Tasks
                                                </div>
                                                <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                    Explore a wide range of translation tasks and apply for the ones that match your skills and
                                                    expertise.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link className="group grid h-auto w-full justify-start gap-1" href="#">
                                                <div className="text-sm font-medium leading-none group-hover:underline">
                                                    Complete the Translation
                                                </div>
                                                <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                    Deliver high-quality translations and receive feedback from clients.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                        <NavigationMenuLink asChild>
                                            <Link className="group grid h-auto w-full justify-start gap-1" href="#">
                                                <div className="text-sm font-medium leading-none group-hover:underline">Get Paid</div>
                                                <div className="line-clamp-2 text-sm leading-snug text-gray-500 dark:text-gray-400">
                                                    Earn money for your translation work and build your professional portfolio.
                                                </div>
                                            </Link>
                                        </NavigationMenuLink>
                                    </div>
                                </CollapsibleContent>
                            </Collapsible>
                            <NavigationMenuLink asChild>
                                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                                    Testimonials
                                </Link>
                            </NavigationMenuLink>
                            <NavigationMenuLink asChild>
                                <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
                                    Contact
                                </Link>
                            </NavigationMenuLink>
                        </div>
                    </SheetContent>
                </Sheet> */}
            </header>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    Unlock Your Linguistic Potential with Linguify
                                </h1>
                                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Linguify connects you with clients in need of professional translation services, allowing you to build
                                    your portfolio and earn money doing what you love.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button size="lg" variant="default">
                                    <Link href="/signup">Sign Up</Link>
                                </Button>
                                <Button size="lg" variant="outline">
                                    <Link href="/signin">Sign In</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <Badge variant="secondary">Key Features</Badge>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                        Elevate Your Translation Career with Linguify
                                    </h2>
                                    <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Linguify offers a range of features to help you succeed as a freelance translator, including the
                                        ability to accept translation tasks, earn money, and build a professional portfolio.
                                    </p>
                                </div>
                                <div className="grid gap-4 py-4">
                                    <div className="flex items-start gap-2">
                                        <CheckIcon className="mt-1 h-4 w-4 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                                        <div>
                                            <h3 className="text-lg font-semibold">Accept Translation Tasks</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Browse and accept translation tasks from clients in your areas of expertise.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckIcon className="mt-1 h-4 w-4 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                                        <div>
                                            <h3 className="text-lg font-semibold">Earn Money</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Get paid for your translation work and build a steady income stream.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-2">
                                        <CheckIcon className="mt-1 h-4 w-4 flex-shrink-0 text-gray-900 dark:text-gray-50" />
                                        <div>
                                            <h3 className="text-lg font-semibold">Build a Portfolio</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Showcase your translation skills and experience to potential clients.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img
                                alt="Linguify Features"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                height="310"
                                src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"
                                width="550"
                            />
                        </div>
                    </div>
                </section>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <p className="text-lg font-semibold">"Linguify made finding the perfect translator a breeze."</p>
                                    <p className="text-gray-500 dark:text-gray-400">- John Doe, CEO of Acme Corp</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-avatar.svg" />
                                        <AvatarFallback>JD</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold">John Doe</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">CEO, Acme Corp</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <p className="text-lg font-semibold">"Linguify has been a game-changer for my business."</p>
                                    <p className="text-gray-500 dark:text-gray-400">- Jane Smith, Founder of Global Translations</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Avatar>
                                        <AvatarImage src="/placeholder-avatar.svg" />
                                        <AvatarFallback>JS</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <div className="font-semibold">Jane Smith</div>
                                        <div className="text-sm text-gray-500 dark:text-gray-400">Founder, Global Translations</div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <Card />
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M20 6 9 17l-5-5" />
        </svg>
    )
}


function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}


function LanguagesIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
        </svg>
    )
}


function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}