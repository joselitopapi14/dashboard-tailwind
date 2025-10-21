import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ItemLink } from "@/components/ui/itemLink.tsx";
import { ComboboxDropdownMenu } from "@/components/ui/ComboBoxDropMenu.tsx";

// Páginas/Vistas
import CrearUsuariosView from '@/components/views/CrearUsuariosView';
import ListadoUsuariosView from '@/components/views/ListadoUsuariosView';
import BuscarUsuariosView from '@/components/views/BuscarUsuariosView';
import GestionarProyectosView from '@/components/views/GestionarProyectosView';

type ViewType = 'crear-usuarios' | 'listado-usuarios' | 'buscar-usuarios' | 'gestionar-proyectos';

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<ViewType>('crear-usuarios');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false); // Cerrar menú al seleccionar una opción
  };

  const renderView = () => {
    switch (currentView) {
      case 'crear-usuarios':
        return <CrearUsuariosView />;
      case 'listado-usuarios':
        return <ListadoUsuariosView />;
      case 'buscar-usuarios':
        return <BuscarUsuariosView />;
      case 'gestionar-proyectos':
        return <GestionarProyectosView />;
    }
  };

  const SidebarContent = ({ isMobile = false }: { isMobile?: boolean }) => (
    <>
      <div className="pt-8 flex justify-center px-4">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
        >
          <image
            href="assets/pinia.svg"
            width="120"
            height="120"
          />
        </svg>
      </div>
      <div className="flex justify-center px-2">
        <h2 className="font-sans font-bold text-[#ffe676] text-2xl text-center">
          Sistema de Usuarios
        </h2>
      </div>
      <div className="w-full px-2">
        <ul className="w-full space-y-1">
          <li onClick={() => handleViewChange('crear-usuarios')} className="w-full flex">
            <ItemLink title="Crear Usuarios"
              icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M9 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4H7Zm8-1a1 1 0 0 1 1-1h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 0 1-1-1Z" clipRule="evenodd"/>
              </svg>}
              active={currentView === 'crear-usuarios'} />
          </li>
          <li onClick={() => handleViewChange('listado-usuarios')} className="w-full">
            <ItemLink title="Listado de Usuarios"
              icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 6a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm-1.5 8a4 4 0 0 0-4 4 2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-3Zm6.82-3.096a5.51 5.51 0 0 0-2.797-6.293 3.5 3.5 0 1 1 2.796 6.292ZM19.5 18h.5a2 2 0 0 0 2-2 4 4 0 0 0-4-4h-1.1a5.503 5.503 0 0 1-.471.762A5.998 5.998 0 0 1 19.5 18ZM4 7.5a3.5 3.5 0 0 1 5.477-2.889 5.5 5.5 0 0 0-2.796 6.293A3.501 3.501 0 0 1 4 7.5ZM7.1 12H6a4 4 0 0 0-4 4 2 2 0 0 0 2 2h.5a5.998 5.998 0 0 1 3.071-5.238A5.505 5.505 0 0 1 7.1 12Z" clipRule="evenodd"/>
              </svg>}
              active={currentView === 'listado-usuarios'} />
          </li>
          <li onClick={() => handleViewChange('buscar-usuarios')} className="w-full">
            <ItemLink title="Buscar Usuarios"
              icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"/>
              </svg>}
              active={currentView === 'buscar-usuarios'} />
          </li>
          <li onClick={() => handleViewChange('gestionar-proyectos')} className="w-full">
            <ItemLink title="Gestionar Proyectos"
              icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M8 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1h2a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h2Zm6 1h-4v2H9a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2h-1V4Zm-3 8a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Zm2 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Zm-2-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H9Z" clipRule="evenodd"/>
              </svg>}
              active={currentView === 'gestionar-proyectos'} />
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="h-screen flex">
      {/* Botón Hamburguesa - Solo visible en tablet y móvil */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-[#60bf5a]/90 text-white p-2 rounded-md shadow-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Desktop - Oculto en tablet/móvil, ancho fijo 240px */}
      <div className="hidden lg:flex w-60 gap-6 bg-[#60bf5a]/90 flex-col flex-shrink-0">
        <SidebarContent isMobile={false} />
      </div>

      {/* Sidebar Mobile/Tablet - Modal overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Sidebar deslizante */}
          <div className="lg:hidden fixed inset-y-0 left-0 w-60 bg-[#60bf5a]/90 z-40 flex flex-col gap-6 shadow-xl animate-slide-in">
            <SidebarContent isMobile={true} />
          </div>
        </>
      )}

      {/* Contenido Principal */}
      <div className="flex-1 rounded-t-4xl mt-2 lg:mr-2 bg-[#ffffff] flex flex-col shadow-lg shadow-black/30 overflow-hidden">
        <header className="flex justify-end items-center px-4 pt-3 flex-shrink-0">
          {/* Espaciador para el botón hamburguesa en móvil/tablet */}
          <div className="lg:hidden w-10"></div>

          <div className="flex items-center">
            <ComboboxDropdownMenu />
          </div>
        </header>

        <div className="flex-1 px-4 pb-4 overflow-y-auto">
          {renderView()}
        </div>
      </div>
    </div>
  );
}
