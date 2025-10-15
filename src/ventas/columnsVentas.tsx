"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"

export type Venta = {
    id: string
    producto: string
    categoria: string
    cantidad: number
    precioUnitario: number
    total: number
    fecha: string
    cliente: string
}

export const columns: ColumnDef<Venta>[] = [
    {
        accessorKey: "fecha",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Fecha
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const fecha = new Date(row.getValue("fecha"))
            return fecha.toLocaleDateString("es-CO", {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            })
        },
    },
    {
        accessorKey: "producto",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Producto
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "categoria",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Categoría
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "cliente",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Cliente
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "cantidad",
        header: ({ column }) => {
            return (
                <div className="text-center">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Cantidad
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            return <div className="text-center font-medium">{row.getValue("cantidad")}</div>
        },
    },
    {
        accessorKey: "precioUnitario",
        header: ({ column }) => {
            return (
                <div className="text-right">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Precio Unit.
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            const precio = parseFloat(row.getValue("precioUnitario"))
            const formatted = new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
            }).format(precio)

            return <div className="text-right">{formatted}</div>
        },
    },
    {
        accessorKey: "total",
        header: ({ column }) => {
            return (
                <div className="text-right">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Total
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            const total = parseFloat(row.getValue("total"))
            const formatted = new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
            }).format(total)

            return <div className="text-right font-bold">{formatted}</div>
        },
    },
]
