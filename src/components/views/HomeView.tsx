"use client"

import { columns } from "@/payments/columns"
import { DataTable } from "@/payments/data-table"
import { payments } from "@/payments/payments"

export function PaymentsTableWrapper() {
  return (
    <div className="w-full py-4">
      <DataTable columns={columns} data={payments} />
    </div>
  )
}