"use client"

import type { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export type Product = {
    id: string
    nombre: string
    categoria: string
    cantidad: number
    precio: number
}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: "nombre",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nombre del Producto
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
        accessorKey: "precio",
        header: ({ column }) => {
            return (
                <div className="text-right">
                    <Button
                        variant="ghost"
                        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                    >
                        Precio
                        <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            )
        },
        cell: ({ row }) => {
            const precio = parseFloat(row.getValue("precio"))
            const formatted = new Intl.NumberFormat("es-CO", {
                style: "currency",
                currency: "COP",
                minimumFractionDigits: 0,
            }).format(precio)

            return <div className="text-right font-medium">{formatted}</div>
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const product = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                            <span className="sr-only">Abrir menú</span>
                            <MoreHorizontal className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(product.id)}
                        >
                            Copiar ID del producto
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Ver detalles</DropdownMenuItem>
                        <DropdownMenuItem>Editar producto</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">
                            Eliminar producto
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        },
    }
]