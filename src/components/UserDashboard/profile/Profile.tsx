// components/ProfilePage.tsx
import React from 'react';
import Image from 'next/image';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TranslateIcon from '@mui/icons-material/Translate';
import LanguageIcon from '@mui/icons-material/Language';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useUser } from '@clerk/nextjs';

interface Language {
    id: number;
    name: string;
    level: string;
}

interface TranslationPair {
    id: number;
    from: string;
    to: string;
}

interface Specialization {
    id: number;
    name: string;
}

interface Job {
    id: number;
    title: string;
    client: string;
    rating: number;
    review: string;
    wordCount: number;
    completedDate: string;
}

interface Education {
    id: number;
    degree: string;
    institution: string;
    year: number;
}

interface Certification {
    id: number;
    name: string;
    institution: string;
    year: number;
}

const ProfilePage: React.FC = () => {
    const { user } = useUser();

    const translator = {
        name: "Maria Garcia",
        title: "Professional Translator",
        location: "Barcelona, Spain",
        photo: user?.imageUrl, // Ensure this path is correct
        wordRate: 0.12,
        translationScore: 98,
        totalEarnings: 50000,
        jobsCompleted: 120,
        languages: [
            { id: 1, name: "Spanish", level: "Native" },
            { id: 2, name: "English", level: "Fluent" },
            { id: 3, name: "French", level: "Professional" },
        ],
        translationPairs: [
            { id: 1, from: "English", to: "Spanish" },
            { id: 2, from: "French", to: "Spanish" },
            { id: 3, from: "Spanish", to: "English" },
        ],
        specializations: [
            { id: 1, name: "Legal" },
            { id: 2, name: "Technical" },
            { id: 3, name: "Marketing" },
            { id: 4, name: "Medical" },
        ],
        jobs: [
            { id: 1, title: "Legal Contract Translation", client: "LawFirm Co.", rating: 5, review: "Excellent work, very accurate and timely.", wordCount: 5000, completedDate: "2024-07-15" },
            { id: 2, title: "Medical Journal Translation", client: "HealthCare Inc.", rating: 5, review: "Superb attention to detail and medical terminology.", wordCount: 8000, completedDate: "2024-06-30" },
        ],
        education: [
            { id: 1, degree: "BA in Translation and Interpreting", institution: "University of Barcelona", year: 2018 },
            { id: 2, degree: "MA in Specialized Translation", institution: "Pompeu Fabra University", year: 2020 },
        ],
        certifications: [
            { id: 1, name: "Certified Translator", institution: "American Translators Association", year: 2021 },
            { id: 2, name: "Legal Translation Certificate", institution: "Institute of Legal Translation", year: 2022 },
        ],
    };
    console.log(user?.imageUrl)
    return (
        <div className="bg-gray-100 min-h-screen p-8">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="bg-[#14a800] p-6 text-white relative">
                    <div className="flex items-center">
                        <Image
                            src={translator.photo ?? '/default-image.jpg'}
                            alt={translator.name}
                            width={120}
                            height={120}
                            className="rounded-full border-4 border-white mr-6"
                        />
                        <div>
                            <h1 className="text-3xl font-bold">{translator.name}</h1>
                            <p className="text-xl mt-2">{translator.title}</p>
                            <div className="flex items-center mt-2">
                                <LocationOnIcon className="h-5 w-5 mr-2" />
                                <span>{translator.location}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-6">
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
                            <div className="font-bold text-2xl">{translator.translationScore}%</div>
                            <div className="text-sm">Translation Score</div>
                        </div>
                        <div className="bg-blue-100 text-blue-800 p-4 rounded-lg text-center">
                            <div className="font-bold text-2xl">${translator.wordRate.toFixed(2)}</div>
                            <div className="text-sm">Per Word</div>
                        </div>
                        <div className="bg-purple-100 text-purple-800 p-4 rounded-lg text-center">
                            <div className="font-bold text-2xl">${translator.totalEarnings.toLocaleString()}</div>
                            <div className="text-sm">Total Earned</div>
                        </div>
                        <div className="bg-yellow-100 text-yellow-800 p-4 rounded-lg text-center">
                            <div className="font-bold text-2xl">{translator.jobsCompleted}</div>
                            <div className="text-sm">Jobs Completed</div>
                        </div>
                    </div>

                    {/* Languages */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-3 flex items-center">
                            <LanguageIcon className="mr-2" />
                            Languages
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {translator.languages.map(language => (
                                <div key={language.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg">
                                    <span className="font-semibold">{language.name}</span>
                                    <span className="text-gray-600">{language.level}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Translation Pairs */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-3 flex items-center">
                            <TranslateIcon className="mr-2" />
                            Translation Pairs
                        </h2>
                        <div className="flex flex-wrap">
                            {translator.translationPairs.map(pair => (
                                <span key={pair.id} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                                    {pair.from} → {pair.to}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Specializations */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-3">Specializations</h2>
                        <div className="flex flex-wrap">
                            {translator.specializations.map(specialization => (
                                <span key={specialization.id} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                                    {specialization.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Education */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-3 flex items-center">
                            <SchoolIcon className="mr-2" />
                            Education
                        </h2>
                        {translator.education.map(edu => (
                            <div key={edu.id} className="mb-2">
                                <h3 className="font-semibold">{edu.degree}</h3>
                                <p className="text-gray-600">{edu.institution}, {edu.year}</p>
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div className="mb-6">
                        <h2 className="text-xl font-bold mb-3 flex items-center">
                            <VerifiedIcon className="mr-2" />
                            Certifications
                        </h2>
                        {translator.certifications.map(cert => (
                            <div key={cert.id} className="mb-2">
                                <h3 className="font-semibold">{cert.name}</h3>
                                <p className="text-gray-600">{cert.institution}, {cert.year}</p>
                            </div>
                        ))}
                    </div>

                    {/* Work History */}
                    <div>
                        <h2 className="text-xl font-bold mb-3 flex items-center">
                            <WorkHistoryIcon className="mr-2" />
                            Work History
                        </h2>
                        {translator.jobs.map(job => (
                            <div key={job.id} className="mb-4 pb-4 border-b border-gray-200 last:border-b-0">
                                <h3 className="font-bold">{job.title}</h3>
                                <p className="text-gray-600">{job.client}</p>
                                <div className="flex items-center mt-2">
                                    {[...Array(5)].map((_, i) => (
                                        <StarIcon key={i} className={`h-5 w-5 ${i < job.rating ? 'text-yellow-400' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                                <p className="mt-2 text-gray-700">{job.review}</p>
                                <div className="mt-1 text-sm text-gray-500 flex justify-between">
                                    <span>{job.wordCount.toLocaleString()} words translated</span>
                                    <span>Completed: {job.completedDate}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;