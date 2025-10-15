"use client"

import { columns } from "@/products/columnsProduct"
import { DataTable } from "@/products/data-table"
import { products } from "@/products/products"

export function ProductsTableWrapper() {
    return (
        <div className="w-full">
            <DataTable 
                columns={columns} 
                data={products} 
                filterColumn="categoria"
                filterPlaceholder="Filtrar por categoría..."
            />
        </div>
    )
}
