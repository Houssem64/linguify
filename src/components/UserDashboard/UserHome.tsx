
import { Button } from "@/components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import Link from "next/link"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function UserHome() {
    return (
        <div className="flex m-2 flex-col min-h-[100dvh]">
            <main className="flex-1  bg-gray-100/40 dark:bg-gray-800/40">
                <div className="max-w-6xl w-full mx-auto grid gap-8 py-8 md:py-12 lg:py-16">
                    <div className="flex mx-5 justify-center text-center md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr] items-center gap-6">
                        <div className="space-y-4 w-full">
                            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Welcome to Your Dashboard</h1>
                            <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
                                Manage your projects, deployments, and more from one central location.
                            </p>

                        </div>

                    </div>
                    <div className="flex mt-10 flex-row justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Active Tasks</CardTitle>
                                <CardDescription>View and manage your active Tasks.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">12</div>
                            </CardContent>
                            <CardFooter>
                                <Link className="font-medium" href="#">
                                    View Tasks
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Completed Tasks</CardTitle>
                                <CardDescription>Track the success of your Completed Tasks.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">48</div>
                            </CardContent>
                            <CardFooter>
                                <Link className="font-medium" href="#">
                                    View Completed Tasks
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Translation Score</CardTitle>
                                <CardDescription>Dive into your  performance metrics.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">98%</div>
                            </CardContent>
                            <CardFooter>
                                <Link className="font-medium" href="#">
                                    View Analytics
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                    {/*  <div className="flex mx-2 p-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Recent Logs</CardTitle>
                                <CardDescription>Review your app's recent activity logs.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Time</TableHead>
                                            <TableHead>Event</TableHead>
                                            <TableHead>Status</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>12:34 PM</TableCell>
                                            <TableCell>Deployment Successful</TableCell>
                                            <TableCell className="text-green-500">Success</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>11:22 AM</TableCell>
                                            <TableCell>API Request</TableCell>
                                            <TableCell className="text-yellow-500">Pending</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell>9:15 AM</TableCell>
                                            <TableCell>Database Query</TableCell>
                                            <TableCell className="text-red-500">Error</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </CardContent>
                            <CardFooter>
                                <Link className="font-medium" href="#">
                                    View Logs
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Integrations</CardTitle>
                                <CardDescription>Manage your app's integrations and connections.</CardDescription>
                            </CardHeader>

                            <CardFooter>
                                <Link className="font-medium" href="#">
                                    Manage Integrations
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Notifications</CardTitle>
                                <CardDescription>Stay up-to-date with your app's activity.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-[25px_1fr] items-start gap-4">
                                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium">Your call has been confirmed.</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">5 min ago</p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-[25px_1fr] items-start gap-4 mt-4">
                                    <span className="flex h-2 w-2 translate-y-1.5 rounded-full bg-blue-500" />
                                    <div className="grid gap-1">
                                        <p className="text-sm font-medium">You have a new message!</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">1 min ago</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Link className="font-medium" href="#">
                                    View Notifications
                                </Link>
                            </CardFooter>
                        </Card>
                    </div> */}
                    <div className="flex  mt-10  flex-row justify-center md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Active Projects</CardTitle>
                                <CardDescription>View and manage your active projects.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">12</div>
                            </CardContent>
                            <CardFooter>
                                <Link className="font-medium" href="#">
                                    View Projects
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Successful Deployments</CardTitle>
                                <CardDescription>Track the success of your deployments.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">48</div>
                            </CardContent>
                            <CardFooter>
                                <Link className="font-medium" href="#">
                                    View Deployments
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Analytics</CardTitle>
                                <CardDescription>Dive into your app's performance metrics.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="text-4xl font-bold">98%</div>
                            </CardContent>
                            <CardFooter>
                                <Link className="font-medium" href="#">
                                    View Analytics
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

