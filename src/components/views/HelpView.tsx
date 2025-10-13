export default function HelpView() {
  return (
    <div className="p-6 overflow-y-auto h-full">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold mb-6">Centro de Ayuda</h2>
        
        <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">¿Cómo navegar el dashboard?</h3>
            <p className="text-sm text-gray-600">
              Utiliza el menú lateral para navegar entre las diferentes secciones del dashboard.
              Cada sección se cargará en el panel principal sin recargar la página.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">¿Cómo gestionar productos?</h3>
            <p className="text-sm text-gray-600">
              En la sección de Productos puedes ver, buscar y gestionar todos los productos
              en una tabla interactiva con opciones de paginación y búsqueda.
            </p>
          </div>

          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Soporte Técnico</h3>
            <p className="text-sm text-gray-600">
              Si necesitas ayuda adicional, contacta a nuestro equipo de soporte en
              soporte@ejemplo.com
            </p>
          </div>

          <div className="bg-[#89c28c]/10 border border-[#89c28c] rounded-lg p-4 mt-6">
            <p className="text-sm font-medium text-[#89c28c]">
              💡 Tip: Este dashboard usa navegación SPA (Single Page Application) para una
              experiencia más rápida y fluida.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
