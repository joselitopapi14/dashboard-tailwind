"use client"

import type { ColumnDef } from "@tanstack/react-table"
import type { Usuario } from "@/types/usuario"
import { Button } from "@/components/ui/button"
import { ArrowUpDown } from "lucide-react"

export const columns: ColumnDef<Usuario>[] = [
  {
    accessorKey: "identificacion",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Identificación
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "nombres",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Nombres
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "apellidos",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Apellidos
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "fecha_nacimiento",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha de Nacimiento
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
      const fechaValue = row.getValue("fecha_nacimiento")

      // Si no hay valor, mostrar un mensaje
      if (!fechaValue) {
        return <span className="text-gray-400">Sin fecha</span>
      }

      // Convertir Unix timestamp a Date (multiplicar por 1000 porque JS usa milisegundos)
      const fecha = new Date((fechaValue as number) * 1000)

      // Validar que la fecha sea válida
      if (isNaN(fecha.getTime())) {
        return <span className="text-gray-400">Fecha inválida</span>
      }

      return fecha.toLocaleDateString("es-CO", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    },
  },
  {
    accessorKey: "genero",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Género
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
]
