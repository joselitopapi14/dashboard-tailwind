"use client"

import { columns } from "@/ventas/columnsVentas"
import { DataTableVentas } from "@/ventas/data-table-ventas"
import { ventas } from "@/ventas/ventas"

export function VentasTableWrapper() {
    return (
        <div className="w-full h-[600px]">
            <DataTableVentas columns={columns} data={ventas} />
        </div>
    )
}
