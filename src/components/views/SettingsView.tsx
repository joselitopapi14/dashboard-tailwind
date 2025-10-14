export default function SettingsView() {
  return (
    <div className="pb-6 pl-6 overflow-y-auto h-full">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Configuración</h2>
        
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Preferencias de Usuario</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Notificaciones</span>
                <input type="checkbox" className="h-4 w-4" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Modo Oscuro</span>
                <input type="checkbox" className="h-4 w-4" />
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Información de la Cuenta</h3>
            <div className="space-y-2">
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  defaultValue="usuario@ejemplo.com"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Nombre</label>
                <input
                  type="text"
                  defaultValue="Usuario Demo"
                  className="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <button className="bg-[#89c28c] text-white px-4 py-2 rounded-md hover:bg-[#7ab17d] transition-colors">
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
}
