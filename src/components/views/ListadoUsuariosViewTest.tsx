"use client"

export default function ListadoUsuariosViewTest() {
    return (
        <div className="w-full p-8">
            <h1 className="text-3xl font-bold text-green-600">
                ✅ El componente ListadoUsuariosView se carga correctamente
            </h1>
            <p className="mt-4 text-lg">
                Si ves este mensaje, significa que la navegación funciona y el componente se renderiza.
            </p>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="font-semibold">Próximos pasos:</p>
                <ul className="list-disc list-inside mt-2">
                    <li>Verificar que MockAPI responde correctamente</li>
                    <li>Revisar la consola del navegador (F12) para errores</li>
                    <li>Comprobar que todas las dependencias están instaladas</li>
                </ul>
            </div>
        </div>
    )
}
