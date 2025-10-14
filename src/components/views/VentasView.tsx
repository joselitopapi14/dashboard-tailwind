"use client"

import { columns } from "@/payments/columns"
import { DataTable } from "@/payments/data-table"
import { payments } from "@/payments/payments"

export function PaymentsTableWrapper() {
  return (
    <div className="pb-6 pl-6 overflow-y-auto h-full">
          <div className="max-w-3xl"></div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Insights</h2>
            <DataTable columns={columns} data={payments} />
          </div>
        </div>
  )
}
export default function VentasView() {
  return <PaymentsTableWrapper />;
}
