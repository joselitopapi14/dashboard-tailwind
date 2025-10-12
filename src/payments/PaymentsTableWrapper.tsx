"use client"

import { columns } from "./columns"
import { DataTable } from "./data-table"
import { payments } from "./payments"

export function PaymentsTableWrapper() {
  return (
    <div className="w-full py-4">
      <DataTable columns={columns} data={payments} />
    </div>
  )
}
