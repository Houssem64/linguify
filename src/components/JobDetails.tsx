// components/JobDetails.tsx
import { SheetHeader, SheetTitle, SheetDescription, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

type TranslationJob = {
    id: number;
    title: string;
    description: string;
    category: string;
    skills: string[];
    budget: string;
    deadline: string;
};
type JobDetailsProps = {
    job: TranslationJob;
};

export default function JobDetails({ job }: JobDetailsProps) {
    const router = useRouter();
    return (
        <>

            <SheetHeader  >
                <SheetTitle>{job.title}</SheetTitle>
                <SheetDescription>{job.description}</SheetDescription>
            </SheetHeader>
            <div className="py-4">
                <h3 className="font-semibold mb-2">Job Details</h3>
                <ul className="space-y-2">
                    <li><span className="font-medium">Category:</span> {job.category}</li>
                    <li><span className="font-medium">Skills:</span> {job.skills.join(", ")}</li>
                    <li><span className="font-medium">Budget:</span> {job.budget}</li>
                    <li><span className="font-medium">Deadline:</span> {job.deadline}</li>
                </ul>
            </div>
            <SheetFooter>
                <Button onClick={() => router.push(`/job/${job.id}`)} type="submit" className="bg-[#14a800] text-white hover:bg-[#118f00] transition-colors">Apply for Job</Button>
            </SheetFooter>

        </>
    );
}