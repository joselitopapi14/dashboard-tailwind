import { useState } from 'react';
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

  return (
    <div className="grid grid-cols-7 h-screen ">
      {/* Sidebar */}
      <div className="col-span-1 gap-6 bg-[#89c28c] flex flex-col">
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
            <li onClick={() => setCurrentView('home')} className="w-full">
              <ItemLink title="Inicio" active={currentView === 'home'} />
            </li>
            <li onClick={() => setCurrentView('metrics')} className="w-full">
              <ItemLink title="Metricas" active={currentView === 'metrics'} />
            </li>
            <li onClick={() => setCurrentView('ventas')} className="w-full">
              <ItemLink title="Ventas / Inventario" active={currentView === 'ventas'} />
            </li>
            <li onClick={() => setCurrentView('settings')} className="w-full">
              <ItemLink title="Configuración" active={currentView === 'settings'} />
            </li>
            <li onClick={() => setCurrentView('help')} className="w-full">
              <ItemLink title="Ayuda" active={currentView === 'help'} />
            </li>
          </ul>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="col-span-6 rounded-t-4xl mt-2 mr-2 bg-[#ffffff] flex flex-col shadow-lg shadow-black/30 overflow-hidden">
        <header className="flex justify-end items-center px-4 pt-3 flex-shrink-0">
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
