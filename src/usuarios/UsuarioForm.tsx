"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    Field,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import type { Usuario } from "@/types/usuario"

interface UsuarioFormProps {
    usuario?: Usuario
    onSubmit: (usuario: Omit<Usuario, "id"> | Usuario) => Promise<void>
    onCancel: () => void
    isEditing?: boolean
}

export function UsuarioForm({ usuario, onSubmit, onCancel, isEditing = false }: UsuarioFormProps) {
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState({
        identificacion: usuario?.identificacion || "",
        nombres: usuario?.nombres || "",
        apellidos: usuario?.apellidos || "",
        fecha_nacimiento: usuario?.fecha_nacimiento
            ? new Date(usuario.fecha_nacimiento * 1000).toISOString().split('T')[0]
            : "",
        genero: usuario?.genero || "",
        email: usuario?.email || "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            // Convertir la fecha a Unix timestamp
            const fechaTimestamp = new Date(formData.fecha_nacimiento).getTime() / 1000

            const usuarioData = {
                ...formData,
                fecha_nacimiento: fechaTimestamp,
                ...(isEditing && usuario ? { id: usuario.id } : {}),
            }

            await onSubmit(usuarioData as any)
        } catch (error) {
            console.error("Error al guardar usuario:", error)
        } finally {
            setLoading(false)
        }
    }

    const handleChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    return (
        <div className="w-full max-w-md">
            <form onSubmit={handleSubmit}>
                <FieldGroup>
                    <FieldSet>
                        <FieldLegend>
                            {isEditing ? "Editar Usuario" : "Agregar Usuario"}
                        </FieldLegend>

                        <FieldGroup>
                            <Field>
                                <FieldLabel htmlFor="identificacion">
                                    Identificación
                                </FieldLabel>
                                <Input
                                    id="identificacion"
                                    placeholder="Número de identificación"
                                    value={formData.identificacion}
                                    onChange={(e) => handleChange("identificacion", e.target.value)}
                                    required
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="nombres">
                                    Nombres
                                </FieldLabel>
                                <Input
                                    id="nombres"
                                    placeholder="Nombres completos"
                                    value={formData.nombres}
                                    onChange={(e) => handleChange("nombres", e.target.value)}
                                    required
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="apellidos">
                                    Apellidos
                                </FieldLabel>
                                <Input
                                    id="apellidos"
                                    placeholder="Apellidos completos"
                                    value={formData.apellidos}
                                    onChange={(e) => handleChange("apellidos", e.target.value)}
                                    required
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="fecha_nacimiento">
                                    Fecha de Nacimiento
                                </FieldLabel>
                                <Input
                                    id="fecha_nacimiento"
                                    type="date"
                                    value={formData.fecha_nacimiento}
                                    onChange={(e) => handleChange("fecha_nacimiento", e.target.value)}
                                    required
                                />
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="genero">
                                    Género
                                </FieldLabel>
                                <Select
                                    value={formData.genero}
                                    onValueChange={(value) => handleChange("genero", value)}
                                >
                                    <SelectTrigger id="genero">
                                        <SelectValue placeholder="Seleccione género" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="Masculino">Masculino</SelectItem>
                                        <SelectItem value="Femenino">Femenino</SelectItem>
                                        <SelectItem value="Otro">Otro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </Field>

                            <Field>
                                <FieldLabel htmlFor="email">
                                    Email
                                </FieldLabel>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="correo@ejemplo.com"
                                    value={formData.email}
                                    onChange={(e) => handleChange("email", e.target.value)}
                                    required
                                />
                            </Field>
                        </FieldGroup>
                    </FieldSet>

                    <Field orientation="horizontal" className="mt-6">
                        <Button type="submit" disabled={loading}>
                            {loading ? "Guardando..." : isEditing ? "Actualizar" : "Crear"}
                        </Button>
                        <Button variant="outline" type="button" onClick={onCancel} disabled={loading}>
                            Cancelar
                        </Button>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    )
}
