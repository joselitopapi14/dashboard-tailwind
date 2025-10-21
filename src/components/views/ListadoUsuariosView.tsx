"use client"
import { columns } from "@/usuarios/columnsUsuarios"
import { DataTable } from "@/products/data-table"
import { usuarios } from "@/data/usuarios"

export default function ListadoUsuariosView() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Listado de Usuarios</h2>
      <DataTable 
        columns={columns} 
        data={usuarios}
        filterColumn="nombres"
        filterPlaceholder="Filtrar por nombres..."
      />
    </div>
  )
}
