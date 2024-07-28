// app/job/[id]/page.tsx

import JobDetails from './JobDetails'

export default function Page({ params }: { params: { id: string } }) {
    return <JobDetails id={params.id} />
}