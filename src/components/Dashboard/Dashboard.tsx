import { Tasks, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Tasks[]> {
    // Fetch data from your API here.
    return [
        {
            id: "1",
            tasks: "Translate 10 pages of text",
            status: "pending",

            deadline: "2022-01-01",

            payment: " $100",
            actions: "Completed",
            download_source: "https://bit.ly/1GB-testfile"
        },
    ]
}

export default async function DemoPage() {
    const data = await getData()

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={data} />
        </div>
    )
}
