// app/job/[id]/JobDetails.tsx

'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface Client {
    name: string;
    rating: number;
}

interface Job {
    id: string;
    title: string;
    description: string;
    category: string;
    skills: string[];
    budget: string;
    deadline: string;
    client: Client;
    postedDate: string;
}

const fetchJobDetails = async (id: string): Promise<Job> => {
    // This is a placeholder. In a real app, you'd fetch this data from an API
    return {
        id,
        title: `Translation Job ${id}`,
        description: "This is a detailed description of the translation job.",
        category: "Technical Translation",
        skills: ["Spanish", "English", "Technical Writing"],
        budget: "$500 - $1000",
        deadline: "2024-08-15",
        client: {
            name: "TechCorp Inc.",
            rating: 4.8,
        },
        postedDate: "2024-07-01",
    }
}

const JobDetails: React.FC<{ id: string }> = ({ id }) => {
    const router = useRouter()
    const [job, setJob] = useState<Job | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        setIsLoading(true)
        fetchJobDetails(id)
            .then((data) => {
                setJob(data)
                setIsLoading(false)
            })
            .catch((err) => {
                setError('Failed to fetch job details')
                setIsLoading(false)
            })
    }, [id])

    if (isLoading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>
    if (!job) return <div>No job found</div>

    return (
        <div className="container mx-auto px-4 py-8">
            <Link href="/dashboard" className="text-[#14a800] hover:underline mb-4 inline-block">
                &larr; Back to Jobs
            </Link>

            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{job.title}</h1>

                    <div className="mb-6">
                        <p className="text-gray-600">{job.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Job Details</h2>
                            <ul className="space-y-2">
                                <li><span className="font-medium">Category:</span> {job.category}</li>
                                <li><span className="font-medium">Skills:</span> {job.skills.join(", ")}</li>
                                <li><span className="font-medium">Budget:</span> {job.budget}</li>
                                <li><span className="font-medium">Deadline:</span> {job.deadline}</li>
                                <li><span className="font-medium">Posted:</span> {job.postedDate}</li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Client Information</h2>
                            <ul className="space-y-2">
                                <li><span className="font-medium">Client:</span> {job.client.name}</li>
                                <li><span className="font-medium">Rating:</span> {job.client.rating}/5</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-6">
                        <button className="bg-[#14a800] text-white py-2 px-4 rounded-md hover:bg-[#118f00] transition-colors">
                            Apply for this Job
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetails