"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Tasks = {
    id: string
    payment: string
    status: "pending" | "processing" | "success" | "failed"
    tasks: string
    deadline: string
    actions: string
    download_source: string
}

export const columns: ColumnDef<Tasks>[] = [
    {
        accessorKey: "tasks",
        header: "Tasks",
    },

    {
        accessorKey: "deadline",
        header: "Deadline",
    },
    {
        accessorKey: "payment",
        header: "Payment",
    },
    {
        accessorKey: "status",
        header: "Status",
    },
    {
        accessorKey: "actions",
        header: "Actions",
    },
    {
        accessorKey: "download_source",
        header: () => <div></div>,
        cell: ({ row }) => {
            const value = row.original.download_source
            if (value === "Download") {
                return (
                    <a href={value} target="_blank" download>
                        <button>Download</button>
                    </a>
                )
            }
            return <a href={value} download>
                <button>Download</button>
            </a>

        }
    },





]
