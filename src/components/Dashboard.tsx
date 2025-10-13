import { useState } from 'react';
import { ItemLink } from "@/components/ui/itemLink.tsx";
import { ComboboxDropdownMenu } from "@/components/ui/ComboBoxDropMenu.tsx";

// Páginas/Vistas
import ProductsView from '@/components/views/ProductsView';
import LoginView from '@/components/views/LoginView';
import SettingsView from '@/components/views/SettingsView';
import HelpView from '@/components/views/HelpView';

type ViewType = 'home' | 'products' | 'login' | 'settings' | 'help';

export default function Dashboard() {
  const [currentView, setCurrentView] = useState<ViewType>('products');

  const renderView = () => {
    switch (currentView) {
      case 'home':
      case 'products':
        return <ProductsView />;
      case 'login':
        return <LoginView />;
      case 'settings':
        return <SettingsView />;
      case 'help':
        return <HelpView />;
      default:
        return <ProductsView />;
    }
  };

  const getViewTitle = () => {
    switch (currentView) {
      case 'home':
      case 'products':
        return 'Productos';
      case 'login':
        return 'Login';
      case 'settings':
        return 'Configuración';
      case 'help':
        return 'Ayuda';
      default:
        return 'Dashboard';
    }
  };

  return (
    <div className="grid grid-cols-7 h-screen">
      {/* Sidebar */}
      <div className="col-span-1 gap-6 bg-[#89c28c] flex flex-col items-center">
        <div className="pt-8">
          <svg width="120" height="120">
            <image
              href="assets/pinia.svg"
              width="120"
              height="120"
            />
          </svg>
        </div>
        <div>
          <h2 className="font-sans font-bold text-white text-2xl">
            Dashboard
          </h2>
        </div>
        <div>
          <ul>
            <li onClick={() => setCurrentView('home')}>
              <ItemLink title="Inicio" active={currentView === 'home'} />
            </li>
            <li onClick={() => setCurrentView('login')}>
              <ItemLink title="Login" active={currentView === 'login'} />
            </li>
            <li onClick={() => setCurrentView('products')}>
              <ItemLink title="Productos" active={currentView === 'products'} />
            </li>
            <li onClick={() => setCurrentView('settings')}>
              <ItemLink title="Configuración" active={currentView === 'settings'} />
            </li>
            <li onClick={() => setCurrentView('help')}>
              <ItemLink title="Ayuda" active={currentView === 'help'} />
            </li>
          </ul>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="col-span-6 rounded-t-4xl mt-2 mr-2 bg-[#ffffff] flex flex-col shadow-lg shadow-black/30 overflow-hidden">
        <header className="flex justify-end items-center px-4 py-3 flex-shrink-0">
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
