"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import type { Usuario } from "@/types/usuario"

interface DeleteDialogProps {
    open: boolean
    usuario: Usuario | null
    onConfirm: () => void
    onCancel: () => void
}

export function DeleteDialog({ open, usuario, onConfirm, onCancel }: DeleteDialogProps) {
    if (!usuario) return null

    return (
        <AlertDialog open={open} onOpenChange={onCancel}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>¿Estás seguro?</AlertDialogTitle>
                    <AlertDialogDescription>
                        Esta acción no se puede deshacer. Se eliminará permanentemente el usuario:
                        <br />
                        <strong className="text-foreground">
                            {usuario.nombres} {usuario.apellidos}
                        </strong>
                        <br />
                        Identificación: {usuario.identificacion}
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel onClick={onCancel}>Cancelar</AlertDialogCancel>
                    <AlertDialogAction
                        onClick={onConfirm}
                        className="bg-red-600 hover:bg-red-700 focus:ring-red-600"
                    >
                        Eliminar
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
