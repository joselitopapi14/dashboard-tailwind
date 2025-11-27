"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const API_URL = 'https://6927125626e7e41498fcd7b0.mockapi.io/api/v1/usuarios'

export default function CrearUsuariosView() {
  const [formData, setFormData] = useState({
    identificacion: "",
    nombres: "",
    apellidos: "",
    fechaNacimiento: "",
    genero: "",
    email: ""
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      setLoading(true)
      setError(null)
      setSuccess(false)

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Error al crear el usuario')
      }

      const data = await response.json()
      console.log("Usuario creado:", data)
      
      setSuccess(true)
      
      // Reset form
      setFormData({
        identificacion: "",
        nombres: "",
        apellidos: "",
        fechaNacimiento: "",
        genero: "",
        email: ""
      })

      // Limpiar mensaje de éxito después de 3 segundos
      setTimeout(() => setSuccess(false), 3000)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error desconocido')
      console.error('Error creating usuario:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Crear Usuario</h2>
      
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">Error: </strong>
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      {success && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <strong className="font-bold">¡Éxito! </strong>
          <span className="block sm:inline">Usuario creado exitosamente</span>
        </div>
      )}
      
      <Card>
        <CardHeader>
          <CardTitle>Formulario de Registro</CardTitle>
          <CardDescription>Complete los datos del nuevo usuario</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="identificacion">Identificación</Label>
              <Input
                id="identificacion"
                placeholder="Ingrese la identificación"
                value={formData.identificacion}
                onChange={(e) => handleChange("identificacion", e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="nombres">Nombres</Label>
              <Input
                id="nombres"
                placeholder="Ingrese los nombres"
                value={formData.nombres}
                onChange={(e) => handleChange("nombres", e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apellidos">Apellidos</Label>
              <Input
                id="apellidos"
                placeholder="Ingrese los apellidos"
                value={formData.apellidos}
                onChange={(e) => handleChange("apellidos", e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="fechaNacimiento">Fecha de Nacimiento</Label>
              <Input
                id="fechaNacimiento"
                type="date"
                value={formData.fechaNacimiento}
                onChange={(e) => handleChange("fechaNacimiento", e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="genero">Género</Label>
              <Select value={formData.genero} onValueChange={(value) => handleChange("genero", value)} disabled={loading}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione el género" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Masculino">Masculino</SelectItem>
                  <SelectItem value="Femenino">Femenino</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="correo@ejemplo.com"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                disabled={loading}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Creando..." : "Crear Usuario"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
