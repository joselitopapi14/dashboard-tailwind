"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { columns } from "@/usuarios/columnsUsuarios"
import { DataTable } from "@/products/data-table"
import { usuarios } from "@/data/usuarios"
import type { Usuario } from "@/types/usuario"

export default function BuscarUsuariosView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchField, setSearchField] = useState<keyof Usuario>("nombres")
  const [filteredUsers, setFilteredUsers] = useState<Usuario[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredUsers([])
      setHasSearched(false)
      return
    }

    const results = usuarios.filter((usuario) => {
      const fieldValue = usuario[searchField]?.toString().toLowerCase() || ""
      return fieldValue.includes(searchTerm.toLowerCase())
    })

    setFilteredUsers(results)
    setHasSearched(true)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="w-full space-y-6">
      <h2 className="text-2xl font-bold">Buscar Usuarios</h2>
      
      <div className="flex gap-4 items-end">
        <div className="flex-1 space-y-2">
          <Label htmlFor="searchTerm">Término de búsqueda</Label>
          <Input
            id="searchTerm"
            placeholder="Ingrese el término a buscar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>

        <div className="w-64 space-y-2">
          <Label htmlFor="searchField">Buscar por</Label>
          <Select value={searchField} onValueChange={(value) => setSearchField(value as keyof Usuario)}>
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

        <Button onClick={handleSearch}>
          Buscar
        </Button>
      </div>

      {hasSearched && (
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
