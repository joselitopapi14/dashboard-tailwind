"use client"
import { useState, useEffect } from "react"
import { createColumns } from "@/usuarios/columnsUsuarios"
import { DataTable } from "@/products/data-table"
import { UsuarioForm } from "@/usuarios/UsuarioForm"
import { DeleteDialog } from "@/usuarios/DeleteDialog"
import type { Usuario } from "@/types/usuario"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

const API_URL = 'https://6927125626e7e41498fcd7b0.mockapi.io/api/v1/usuarios'

export default function ListadoUsuariosView() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [showForm, setShowForm] = useState(false)
  const [editingUsuario, setEditingUsuario] = useState<Usuario | null>(null)
  const [deletingUsuario, setDeletingUsuario] = useState<Usuario | null>(null)

  // Fetch usuarios
  const fetchUsuarios = async () => {
    try {
      setLoading(true)
      const response = await fetch(API_URL)

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

  useEffect(() => {
    fetchUsuarios()
  }, [])

  // Crear usuario
  const handleCreate = async (usuarioData: Omit<Usuario, "id">) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioData),
      })

      if (!response.ok) {
        throw new Error('Error al crear usuario')
      }

      await fetchUsuarios()
      setShowForm(false)
    } catch (err) {
      console.error('Error creating usuario:', err)
      throw err
    }
  }

  // Actualizar usuario
  const handleUpdate = async (usuarioData: Usuario) => {
    try {
      const response = await fetch(`${API_URL}/${usuarioData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuarioData),
      })

      if (!response.ok) {
        throw new Error('Error al actualizar usuario')
      }

      await fetchUsuarios()
      setEditingUsuario(null)
    } catch (err) {
      console.error('Error updating usuario:', err)
      throw err
    }
  }

  // Eliminar usuario
  const handleDelete = async () => {
    if (!deletingUsuario) return

    try {
      const response = await fetch(`${API_URL}/${deletingUsuario.id}`, {
        method: 'DELETE',
      })

      if (!response.ok) {
        throw new Error('Error al eliminar usuario')
      }

      await fetchUsuarios()
      setDeletingUsuario(null)
    } catch (err) {
      console.error('Error deleting usuario:', err)
      setError(err instanceof Error ? err.message : 'Error al eliminar')
    }
  }

  // Handlers para las acciones
  const handleEdit = (usuario: Usuario) => {
    setEditingUsuario(usuario)
    setShowForm(true)
  }

  const handleDeleteClick = (usuario: Usuario) => {
    setDeletingUsuario(usuario)
  }

  const handleCancelForm = () => {
    setShowForm(false)
    setEditingUsuario(null)
  }

  const handleSubmitForm = async (usuarioData: Omit<Usuario, "id"> | Usuario) => {
    if (editingUsuario) {
      await handleUpdate(usuarioData as Usuario)
    } else {
      await handleCreate(usuarioData as Omit<Usuario, "id">)
    }
  }

  // Crear columnas con callbacks
  const columns = createColumns(handleEdit, handleDeleteClick)

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
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Listado de Usuarios</h2>
        {!showForm && (
          <Button onClick={() => setShowForm(true)}>
            <Plus className="mr-2 h-4 w-4" />
            Nuevo Usuario
          </Button>
        )}
      </div>

      {showForm ? (
        <UsuarioForm
          usuario={editingUsuario || undefined}
          onSubmit={handleSubmitForm}
          onCancel={handleCancelForm}
          isEditing={!!editingUsuario}
        />
      ) : (
        <DataTable
          columns={columns}
          data={usuarios}
          filterColumn="nombres"
          filterPlaceholder="Filtrar por nombres..."
        />
      )}

      <DeleteDialog
        open={!!deletingUsuario}
        usuario={deletingUsuario}
        onConfirm={handleDelete}
        onCancel={() => setDeletingUsuario(null)}
      />
    </div>
  )
}
