import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { ItemLink } from "@/components/ui/itemLink.tsx";
import { ComboboxDropdownMenu } from "@/components/ui/ComboBoxDropMenu.tsx";

// Páginas/Vistas
import MetricsView from '@/components/views/MetricsView';
import SettingsView from '@/components/views/SettingsView';
import HelpView from '@/components/views/HelpView';
import VentasView from '@/components/views/VentasView';
import HomeView from '@/components/views/HomeView';

type ViewType = 'home' | 'ventas' | 'metrics' | 'settings' | 'help';

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
      case 'ventas':
        return <VentasView />;
      case 'metrics':
        return <MetricsView />;
      case 'settings':
        return <SettingsView />;
      case 'help':
        return <HelpView />;
    }
  };

  const SidebarContent = () => (
    <>
      <div className="pt-8 flex justify-center">
        <svg width="120" height="120">
          <image
            href="assets/pinia.svg"
            width="120"
            height="120"
          />
        </svg>
      </div>
      <div className="flex justify-center">
        <h2 className="font-sans font-bold text-white text-2xl">
          Dashboard
        </h2>
      </div>
      <div className="w-full px-2">
        <ul className="w-full space-y-1">
          <li onClick={() => handleViewChange('home')} className="w-full">
            <ItemLink title="Inicio" active={currentView === 'home'} />
          </li>
          <li onClick={() => handleViewChange('metrics')} className="w-full">
            <ItemLink title="Metricas" active={currentView === 'metrics'} />
          </li>
          <li onClick={() => handleViewChange('ventas')} className="w-full">
            <ItemLink title="Ventas / Inventario" active={currentView === 'ventas'} />
          </li>
          <li onClick={() => handleViewChange('settings')} className="w-full">
            <ItemLink title="Configuración" active={currentView === 'settings'} />
          </li>
          <li onClick={() => handleViewChange('help')} className="w-full">
            <ItemLink title="Ayuda" active={currentView === 'help'} />
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="h-screen flex flex-col md:grid md:grid-cols-7">
      {/* Botón Hamburguesa - Solo visible en móvil */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-[#89c28c] text-white p-2 rounded-md shadow-lg"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Desktop - Oculto en móvil */}
      <div className="hidden md:flex col-span-1 gap-6 bg-[#89c28c] flex-col">
        <SidebarContent />
      </div>

      {/* Sidebar Mobile - Modal overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Sidebar deslizante */}
          <div className="md:hidden fixed inset-y-0 left-0 w-64 bg-[#89c28c] z-40 flex flex-col gap-6 shadow-xl animate-slide-in">
            <SidebarContent />
          </div>
        </>
      )}

      {/* Contenido Principal */}
      <div className="flex-1 md:col-span-6 rounded-t-4xl mt-2 md:mr-2 bg-[#ffffff] flex flex-col shadow-lg shadow-black/30 overflow-hidden">
        <header className="flex justify-between md:justify-end items-center px-4 pt-3 flex-shrink-0">
          {/* Espaciador para el botón hamburguesa en móvil */}
          <div className="md:hidden w-10"></div>
          
          <div className="flex items-center">
            <ComboboxDropdownMenu />
          </div>
        </header>

        <div className="flex-1 px-4 pb-4 overflow-hidden flex flex-col">
          {renderView()}
        </div>
      </div>
    </div>
  );
}
