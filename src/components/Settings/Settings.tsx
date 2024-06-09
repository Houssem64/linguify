/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fdkgSYlO3cT
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import { Switch } from "@/components/ui/switch"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { SessionProvider, useSession } from "next-auth/react"

import { motion } from "framer-motion"
import toast from "react-hot-toast"
import Image from "next/image"
import PaymentForm from "./PaymentForm";

export default function Component() {

    const { data: session, status } = useSession();
    function toastError(e: any) {
        e.preventDefault();
        toast.error("failed to submit form");
    }

    return (
        <motion.main className="flex flex-col gap-8 p-6 md:p-10" initial={{
            y: 20, opacity: 0, height: "100vh"
        }}

            animate={{
                y: 0, opacity: 1, height: "99vh"
            }}
            transition={{ ease: "easeInOut", duration: 0.75 }} >
            <div className="max-w-4xl">
                <h1 className="text-3xl font-bold">Settings</h1>
                <p className="text-gray-500 dark:text-gray-400">Manage your account settings and preferences.</p>
            </div>
            <div className="grid gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Account</CardTitle>
                        <CardDescription>Update your personal information and account settings.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="name">Name</Label>
                            <motion.div animate={{ scale: [0, 1] }} transition={{ delay: 0.25 }}> <Input id="name" value={session?.user?.name || ''} /></motion.div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <motion.div animate={{ scale: [0, 1] }} transition={{ delay: 0.25 }}>  <Input id="name" value={session?.user?.email || ''} /></motion.div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="password">Password</Label>
                            <motion.div animate={{ scale: [0, 1] }} transition={{ delay: 0.25 }}> <Input defaultValue="********" id="password" type="password" /></motion.div>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Save Changes</Button>
                    </CardFooter>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Withdraw</CardTitle>
                        <CardDescription>Choose your preferred Withdraw method.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <AccountBalanceIcon className="h-5 w-5" />
                                <div>
                                    <p className="font-medium">IBAN</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Withdraw to your bank account</p>
                                </div>
                            </div>
                            <RadioGroup defaultValue="iban">
                                <RadioGroupItem className="peer sr-only" id="iban" value="iban" />
                                <Label
                                    className="cursor-pointer rounded-md border-2 border-gray-100 bg-white p-2 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                                    htmlFor="iban"
                                >
                                    <BanknoteIcon className="h-5 w-5" />
                                </Label>
                            </RadioGroup>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Image src="/wise.png" width={24} height={24} alt="D17" />
                                <div>
                                    <p className="font-medium">Wise</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Withdraw using Wise account</p>
                                </div>
                            </div>
                            <RadioGroup defaultValue="stripe">
                                <RadioGroupItem className="peer sr-only" id="stripe" value="stripe" />
                                <Label
                                    className="cursor-pointer rounded-md border-2 border-gray-100 bg-white p-2 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                                    htmlFor="stripe"
                                >
                                    <CreditCardIcon className="h-5 w-5" />
                                </Label>
                            </RadioGroup>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <Image src="/d17.png" width={24} height={24} alt="D17" />
                                <div>
                                    <p className="font-medium">D17</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Withdraw to your E-dinar Wallet</p>
                                </div>
                            </div>
                            <RadioGroup defaultValue="d17">
                                <RadioGroupItem className="peer sr-only" id="d17" value="d17" />
                                <Label
                                    className="cursor-pointer rounded-md border-2 border-gray-100 bg-white p-2 hover:bg-gray-100 hover:text-gray-900 peer-data-[state=checked]:border-gray-900 [&:has([data-state=checked])]:border-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:peer-data-[state=checked]:border-gray-50 dark:[&:has([data-state=checked])]:border-gray-50"
                                    htmlFor="d17"
                                >
                                    <DollarSignIcon className="h-5 w-5" />
                                </Label>
                            </RadioGroup>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Notifications</CardTitle>
                        <CardDescription>Choose what you want to be notified about.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <BellIcon className="h-5 w-5" />
                                <div>
                                    <p className="font-medium">All Notifications</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email digest, mentions & all activity</p>
                                </div>
                            </div>
                            <Switch defaultChecked id="all-notifications" />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <EyeOffIcon className="h-5 w-5" />
                                <div>
                                    <p className="font-medium">Mute Notifications</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Turn off all notifications</p>
                                </div>
                            </div>
                            <Switch id="mute-notifications" />
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Privacy</CardTitle>
                        <CardDescription>Control who can see your profile and activity.</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <UserIcon className="h-5 w-5" />
                                <div>
                                    <p className="font-medium">Public Profile</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Your profile is visible to everyone</p>
                                </div>
                            </div>
                            <Switch defaultChecked id="public-profile" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <LockIcon className="h-5 w-5" />
                                <div>
                                    <p className="font-medium">Private Activity</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Your activity is only visible to you</p>
                                </div>
                            </div>
                            <Switch id="private-activity" />
                        </div>
                    </CardContent>
                </Card>
                <Card>

                    <CardHeader>
                        <CardTitle>Activate Your Account</CardTitle>
                        <CardDescription> Choose your preferred payment method </CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <PaymentForm />
                    </CardContent>
                </Card>

            </div>
        </motion.main>
    )
}

function AtSignIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
        </svg>
    )
}


function BellIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </svg>
    )
}


function EyeOffIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
            <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
            <line x1="2" x2="22" y1="2" y2="22" />
        </svg>
    )
}


function LockIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
    )
}

function DollarSignIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <line x1="12" x2="12" y1="2" y2="22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        </svg>
    )
}

function CreditCardIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
    )
}


function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
    )
}


function TextIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M17 6.1H3" />
            <path d="M21 12.1H3" />
            <path d="M15.1 18H3" />
        </svg>
    )
}


function UserIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
function BanknoteIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <rect width="20" height="12" x="2" y="6" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
        </svg>
    )
}

