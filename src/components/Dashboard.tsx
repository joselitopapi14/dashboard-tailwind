import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ItemLink } from "@/components/ui/itemLink.tsx";
import { ComboboxDropdownMenu } from "@/components/ui/ComboBoxDropMenu.tsx";

// Páginas/Vistas
import MetricsView from '@/components/views/MetricsSalesView';
import SettingsView from '@/components/views/SettingsView';
import HelpView from '@/components/views/HelpView';
import VentasView from '@/components/views/InventoryView';
import HomeView from '@/components/views/HomeView';

type ViewType = 'home' | 'inventario' | 'metrics' | 'settings' | 'help';

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleViewChange = (view: ViewType) => {
    setCurrentView(view);
    setIsMobileMenuOpen(false); // Cerrar menú al seleccionar una opción
  };

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'inventario':
        return <VentasView />;
      case 'metrics':
        return <MetricsView />;
      case 'settings':
        return <SettingsView />;
      case 'help':
        return <HelpView />;
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
          AstroBoard
        </h2>
      </div>
      <div className="w-full px-2">
        <ul className="w-full space-y-1">
          <li onClick={() => handleViewChange('home')} className="w-full flex"
          >
            <ItemLink title="Inicio"
              icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
              </svg>
              }
              active={currentView === 'home'} />
          </li>
          <li onClick={() => handleViewChange('metrics')} className="w-full">

            <ItemLink title="Ventas"
              icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v15a1 1 0 0 0 1 1h15M8 16l2.5-5.5 3 3L17.273 7 20 9.667" />
              </svg>
              }
              active={currentView === 'metrics'} />
          </li>
          <li onClick={() => handleViewChange('inventario')} className="w-full">
            <ItemLink title="Inventario"
              icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd" />
              </svg>
              }
              active={currentView === 'inventario'} />
          </li>
          <li onClick={() => handleViewChange('settings')} className="w-full">
            <ItemLink title="Configuración"
              icon={
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="2" d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>

              }
              active={currentView === 'settings'} />
          </li>
          <li onClick={() => handleViewChange('help')} className="w-full">
            <ItemLink title="Ayuda"
              icon={<svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
              }
              active={currentView === 'help'} />
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
