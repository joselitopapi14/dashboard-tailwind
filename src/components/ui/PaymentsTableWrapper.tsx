"use client"

import { columns } from "@/payments/columnsPayments"
import { DataTable } from "@/payments/data-table"
import { payments } from "@/payments/payments"

export function PaymentsTableWrapper() {
    return (
        <div className="w-full">
            <DataTable columns={columns} data={payments} />
        </div>
    )
}