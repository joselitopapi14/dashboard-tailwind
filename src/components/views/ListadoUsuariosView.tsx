"use client"
import { useState, useEffect } from "react"
import { columns } from "@/usuarios/columnsUsuarios"
import { DataTable } from "@/products/data-table"
import type { Usuario } from "@/types/usuario"

export default function ListadoUsuariosView() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://6927125626e7e41498fcd7b0.mockapi.io/api/v1/usuarios')

        if (!response.ok) {
          throw new Error('Error al cargar los usuarios')
        }

        const data = await response.json()
        setUsuarios(data)
        setError(null)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
        console.error('Error fetching usuarios:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchUsuarios()
  }, [])

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando usuarios...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      </div>
    )
  }

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
