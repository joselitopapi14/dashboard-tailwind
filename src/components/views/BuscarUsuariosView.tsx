"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { createColumns } from "@/usuarios/columnsUsuarios"
import { DataTable } from "@/products/data-table"
import type { Usuario } from "@/types/usuario"

const API_URL = 'https://6927125626e7e41498fcd7b0.mockapi.io/api/v1/usuarios'

export default function BuscarUsuariosView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchField, setSearchField] = useState<keyof Usuario>("nombres")
  const [filteredUsers, setFilteredUsers] = useState<Usuario[]>([])
  const [hasSearched, setHasSearched] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleEdit = (usuario: Usuario) => {
    // Implementar lógica de edición
    console.log("Editar usuario:", usuario)
  }

  const handleDelete = (usuario: Usuario) => {
    // Implementar lógica de eliminación
    console.log("Eliminar usuario:", usuario)
  }

  const columns = createColumns(handleEdit, handleDelete)

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setFilteredUsers([])
      setHasSearched(false)
      return
    }

    try {
      setLoading(true)
      setError(null)
      
      const response = await fetch(API_URL)
      
      if (!response.ok) {
        throw new Error('Error al cargar los usuarios')
      }

      const usuarios: Usuario[] = await response.json()
      
      const results = usuarios.filter((usuario) => {
        const fieldValue = usuario[searchField]?.toString().toLowerCase() || ""
        return fieldValue.includes(searchTerm.toLowerCase())
      })

      setFilteredUsers(results)
      setHasSearched(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
      console.error('Error searching usuarios:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold">Buscar Usuarios</h2>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      <div className="flex gap-4 items-end">
        <div className="flex-1 space-y-2">
          <Label htmlFor="searchTerm">Término de búsqueda</Label>
          <Input
            id="searchTerm"
            placeholder="Ingrese el término a buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={loading}
          />
        </div>

        <div className="w-64 space-y-2">
          <Label htmlFor="searchField">Buscar por</Label>
          <Select value={searchField} onValueChange={(value) => setSearchField(value as keyof Usuario)} disabled={loading}>
            <SelectTrigger id="searchField">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="identificacion">Identificación</SelectItem>
              <SelectItem value="nombres">Nombres</SelectItem>
              <SelectItem value="apellidos">Apellidos</SelectItem>
              <SelectItem value="fechaNacimiento">Fecha de Nacimiento</SelectItem>
              <SelectItem value="genero">Género</SelectItem>
              <SelectItem value="email">Email</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button onClick={handleSearch} disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </Button>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
        </div>
      )}

      {hasSearched && !loading && (
        <div className="mt-6">
          {filteredUsers.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-4">
                Se encontraron {filteredUsers.length} resultado(s)
              </p>
              <DataTable 
                columns={columns} 
                data={filteredUsers}
                filterColumn="nombres"
                filterPlaceholder="Filtrar resultados..."
              />
            </>
          ) : (
            <div className="text-center py-8 text-muted-foreground">
              No se encontraron usuarios que coincidan con la búsqueda
            </div>
          )}
        </div>
      )}
    </div>
  )
}
