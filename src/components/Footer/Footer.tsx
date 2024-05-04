/**
 * v0 by Vercel.
 * @see https://v0.dev/t/0zuDbZguQUF
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
    return (
        <footer className="bottom-0 left-0 right-0 bg-gray-100 py-6 dark:bg-gray-800">
            <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
                <div className="flex items-center">
                    <Link className="flex items-center" href="#">
                        <MountainIcon className="h-6 w-6" />
                        <span className="ml-2 text-sm font-medium">Acme Inc</span>
                    </Link>
                </div>
                <nav className="flex items-center space-x-4 text-sm">
                    <Link className="hover:underline" href="#">
                        Home
                    </Link>
                    <Link className="hover:underline" href="#">
                        About
                    </Link>
                    <Link className="hover:underline" href="#">
                        Services
                    </Link>
                    <Link className="hover:underline" href="#">
                        Contact
                    </Link>
                </nav>
                <div className="text-sm text-gray-500 dark:text-gray-400">© 2024 Linguify Inc. All rights reserved.</div>
            </div>
        </footer>
    )
}

function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}