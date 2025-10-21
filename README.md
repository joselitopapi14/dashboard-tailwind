# 📊 Dashboard Empresarial con Astro + React + Tailwind

Un dashboard moderno y completo desarrollado con Astro, React y Tailwind CSS, diseñado para la gestión empresarial integral con módulos de ventas, inventario, usuarios, proyectos y métricas.

## 🚦 Inicio Rápido

### Prerrequisitos
- **Bun** instalado en tu sistema ([Instalar Bun](https://bun.sh))
- Node.js 18+ (alternativa si no usas Bun)
- Git

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**
   ```sh
   git clone <url-del-repositorio>
   cd dashboard-tailwind
   ```

2. **Instalar dependencias**
   ```sh
   bun install
   ```
   
   *Si usas npm o yarn:*
   ```sh
   npm install
   # o
   yarn install
   ```

3. **Iniciar el servidor de desarrollo**
   ```sh
   bun dev
   ```
   
   *Si usas npm o yarn:*
   ```sh
   npm run dev
   # o
   yarn dev
   ```

4. **Abrir en el navegador**
   
   El servidor se iniciará automáticamente en:
   ```
   http://localhost:4321
   ```

5. **¡Listo!** 🎉
   
   Ahora puedes navegar por las diferentes secciones del dashboard y explorar todas sus funcionalidades.

### 🧞 Comandos Disponibles

Todos los comandos se ejecutan desde la raíz del proyecto en una terminal:

| Comando                   | Acción                                                      |
| :------------------------ | :---------------------------------------------------------- |
| `bun install`             | Instala las dependencias                                    |
| `bun dev`                 | Inicia el servidor de desarrollo en `localhost:4321`        |
| `bun build`               | Construye el sitio de producción en `./dist/`               |
| `bun preview`             | Previsualiza la construcción localmente antes de desplegar  |
| `bun astro ...`           | Ejecuta comandos CLI como `astro add`, `astro check`        |
| `bun astro -- --help`     | Obtén ayuda usando el CLI de Astro                          |

### 📦 Construcción para Producción

Para generar una versión optimizada para producción:

```sh
bun build
```

Los archivos se generarán en el directorio `./dist/` listos para ser desplegados en cualquier servicio de hosting estático (Vercel, Netlify, GitHub Pages, etc.).

Para previsualizar la versión de producción localmente:

```sh
bun preview
```

---

## 🎯 Descripción del Proyecto

Este proyecto es una aplicación web tipo dashboard que proporciona una interfaz de administración empresarial completa. Combina la velocidad de Astro con la interactividad de React y el diseño moderno de Tailwind CSS, junto con componentes de Radix UI y shadcn/ui para una experiencia de usuario profesional.

## ✨ Características Principales

### 📌 Módulos Principales

- **🏠 Home View**: Panel principal con vista general del sistema
- **👥 Gestión de Usuarios**: Sistema completo de administración de usuarios
  - Crear nuevos usuarios
  - Listado completo de usuarios
  - Búsqueda y filtrado de usuarios
- **�️ Ventas**: Módulo de gestión de ventas con:
  - Registro de ventas diarias
  - Tablas interactivas con filtros y paginación
  - Visualización de datos de ventas
- **📈 Métricas y Análisis**: Dashboard de métricas de ventas con gráficos y estadísticas
- **📦 Inventario**: Gestión de productos e inventario
  - Listado de productos con tabla interactiva
  - Filtros y búsqueda avanzada
- **� Gestión de Proyectos**: Administración de proyectos empresariales
- **💳 Pagos**: Módulo de gestión de pagos y transacciones
- **⚙️ Configuración**: Panel de configuración del sistema
- **❓ Ayuda**: Sección de ayuda y soporte

### 🎨 Componentes UI Implementados

- **Avatar**: Componentes de avatar con demo
- **Button**: Botones personalizables
- **Card**: Tarjetas de contenido
- **Carousel**: Carrusel de imágenes con demo
- **Chart**: Gráficos simples y dobles para visualización de datos
- **Checkbox**: Casillas de verificación
- **Command**: Paleta de comandos (Command Palette)
- **Dialog**: Diálogos y modales
- **Dropdown Menu**: Menús desplegables (ComboBox)
- **Field**: Campos de formulario con demo
- **Input Group**: Grupos de entrada
- **Label**: Etiquetas de formulario
- **Navigation Menu**: Menú de navegación con demo
- **Popover**: Popovers informativos
- **Select**: Selectores personalizados
- **Separator**: Separadores visuales
- **Table**: Tablas de datos interactivas con ordenamiento y filtrado
- **Textarea**: Áreas de texto
- **Toast Notifications**: Notificaciones con Sonner

### 🎯 Características Técnicas

- ⚡ **Renderizado híbrido** con Astro (SSR + SSG)
- ⚛️ **Componentes React 19** para interactividad
- 🎨 **Tailwind CSS 4** para estilos modernos
- 📊 **Recharts** para visualización de datos
- 🗃️ **TanStack Table** para tablas avanzadas
- 🎭 **Radix UI** para componentes accesibles
- 🌙 **Modo oscuro** con next-themes
- 📱 **Diseño responsive** móvil y escritorio
- 🎉 **Animaciones** con canvas-confetti y tw-animate-css

## 🚀 Estructura del Proyecto

```text
dashboard-tailwind/
├── public/                      # Archivos estáticos
├── assets/                      # Recursos (imágenes, iconos)
├── src/
│   ├── components/
│   │   ├── Dashboard.tsx        # Componente principal del dashboard
│   │   ├── ui/                  # Biblioteca de componentes UI
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── chart-double.tsx
│   │   │   ├── table.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── ComboBoxDropMenu.tsx
│   │   │   ├── NavigationMenuDemo.tsx
│   │   │   └── ... (más componentes)
│   │   └── views/               # Vistas de la aplicación
│   │       ├── HomeView.tsx
│   │       ├── CrearUsuariosView.tsx
│   │       ├── ListadoUsuariosView.tsx
│   │       ├── BuscarUsuariosView.tsx
│   │       ├── VentasView.tsx
│   │       ├── MetricsSalesView.tsx
│   │       ├── InventoryView.tsx
│   │       ├── GestionarProyectosView.tsx
│   │       ├── SettingsView.tsx
│   │       └── HelpView.tsx
│   ├── data/                    # Datos y mocks
│   │   ├── usuarios.ts
│   │   └── ventasDiarias.tsx
│   ├── layouts/
│   │   └── main.astro           # Layout principal
│   ├── lib/
│   │   └── utils.ts             # Utilidades (cn, etc.)
│   ├── pages/
│   │   └── index.astro          # Página principal
│   ├── payments/                # Módulo de pagos
│   │   ├── columnsPayments.tsx
│   │   ├── data-table.tsx
│   │   ├── pagePayments.tsx
│   │   └── payments.tsx
│   ├── products/                # Módulo de productos
│   │   ├── columnsProduct.tsx
│   │   ├── data-table.tsx
│   │   ├── page.tsx
│   │   └── products.tsx
│   ├── ventas/                  # Módulo de ventas
│   │   ├── columnsVentas.tsx
│   │   ├── data-table-ventas.tsx
│   │   └── ventas.tsx
│   ├── usuarios/                # Módulo de usuarios
│   │   └── columnsUsuarios.tsx
│   ├── types/                   # Tipos TypeScript
│   │   └── usuario.ts
│   └── styles/
│       └── global.css           # Estilos globales
├── astro.config.mjs             # Configuración de Astro
├── components.json              # Configuración de componentes shadcn
├── tsconfig.json                # Configuración de TypeScript
└── package.json                 # Dependencias del proyecto
```

## 🛠️ Tecnologías Utilizadas

### Core
- **Astro 5.14.5**: Framework web moderno para sitios rápidos
- **React 19.2.0**: Biblioteca de UI interactiva
- **TypeScript**: Tipado estático para JavaScript

### Estilización
- **Tailwind CSS 4.1.14**: Framework CSS utility-first
- **class-variance-authority**: Variantes de componentes
- **clsx & tailwind-merge**: Utilidades para clases CSS
- **tw-animate-css**: Animaciones CSS

### Componentes UI
- **Radix UI**: Primitivos de UI accesibles
  - Avatar, Checkbox, Dialog, Dropdown, Label, Navigation Menu, Popover, Select, Separator, Slot
- **Lucide React**: Iconos modernos
- **cmdk**: Command Palette
- **Embla Carousel**: Carrusel de imágenes

### Visualización de Datos
- **Recharts 3.2.1**: Gráficos y charts
- **TanStack React Table 8.21.3**: Tablas avanzadas con filtros y ordenamiento

### Utilidades
- **Sonner**: Sistema de notificaciones toast
- **next-themes**: Gestión de temas (modo oscuro)
- **canvas-confetti**: Efectos de confetti
- **React Router DOM**: Navegación
- **Flowbite**: Componentes adicionales

---

## 📖 Explicación del Código

### Arquitectura del Proyecto

El proyecto sigue una arquitectura modular basada en componentes, donde cada parte del sistema está organizada de forma clara y escalable:

#### 🏗️ Estructura de Carpetas

```text
src/
├── components/          # Componentes de React
│   ├── Dashboard.tsx    # Componente raíz del dashboard
│   ├── ui/              # Biblioteca de componentes reutilizables
│   └── views/           # Vistas/páginas de cada módulo
├── data/                # Datos mock y estructuras de datos
├── layouts/             # Plantillas de Astro
├── lib/                 # Utilidades y helpers
├── pages/               # Rutas de Astro
├── payments/            # Módulo completo de pagos
├── products/            # Módulo completo de productos
├── ventas/              # Módulo completo de ventas
├── usuarios/            # Configuración de usuarios
├── types/               # Tipos TypeScript compartidos
└── styles/              # Estilos globales
```

### 🔑 Componentes Clave

#### 1. **Dashboard.tsx** - El Corazón del Sistema

Este componente es el núcleo de la aplicación. Gestiona:

- **Estado de navegación**: Controla qué vista se muestra actualmente
- **Menú lateral (Sidebar)**: Navegación principal del sistema
- **Menú móvil responsive**: Se adapta a dispositivos móviles
- **Renderizado condicional**: Muestra la vista correspondiente según la selección

```typescript
// Ejemplo de cómo funciona el sistema de vistas
const [currentView, setCurrentView] = useState<ViewType>('crear-usuarios');

const renderView = () => {
  switch (currentView) {
    case 'crear-usuarios': return <CrearUsuariosView />;
    case 'listado-usuarios': return <ListadoUsuariosView />;
    // ... más vistas
  }
};
```

#### 2. **Sistema de Vistas** (views/)

Cada vista es un componente independiente que representa una sección completa del dashboard:

- **HomeView.tsx**: Panel principal con resumen general
- **CrearUsuariosView.tsx**: Formulario para crear nuevos usuarios
- **ListadoUsuariosView.tsx**: Tabla con todos los usuarios registrados
- **BuscarUsuariosView.tsx**: Sistema de búsqueda y filtrado de usuarios
- **VentasView.tsx**: Gestión de ventas y transacciones
- **MetricsSalesView.tsx**: Gráficos y análisis de ventas
- **InventoryView.tsx**: Control de productos e inventario
- **GestionarProyectosView.tsx**: Administración de proyectos
- **SettingsView.tsx**: Configuración del sistema
- **HelpView.tsx**: Ayuda y documentación

#### 3. **Componentes UI Reutilizables** (ui/)

Biblioteca completa de componentes basados en **shadcn/ui** y **Radix UI**:

##### Componentes de Entrada
- **Input**: Campos de texto con variantes y validación
- **Textarea**: Áreas de texto multilínea
- **Checkbox**: Casillas de verificación
- **Select**: Selectores desplegables personalizados
- **Field**: Campos de formulario completos con label y validación

##### Componentes de Navegación
- **NavigationMenu**: Menú de navegación principal
- **ComboBoxDropMenu**: Menú desplegable combinado
- **Dropdown Menu**: Menús contextuales

##### Componentes de Presentación
- **Card**: Tarjetas de contenido con header, body y footer
- **Avatar**: Avatares de usuario con imagen o iniciales
- **Separator**: Separadores visuales
- **Dialog**: Diálogos modales para acciones importantes
- **Popover**: Ventanas emergentes informativas

##### Componentes de Datos
- **Table**: Tablas interactivas con:
  - Ordenamiento por columnas
  - Filtrado de datos
  - Paginación
  - Selección de filas
  - Exportación de datos
- **Chart**: Gráficos simples (líneas, barras, áreas)
- **Chart-Double**: Gráficos con múltiples series de datos

##### Componentes de Feedback
- **Toast (Sonner)**: Notificaciones no intrusivas
- **Canvas Confetti**: Efectos de celebración

##### Componentes de Presentación Visual
- **Carousel**: Carruseles de imágenes con navegación

#### 4. **Sistema de Tablas de Datos**

El proyecto implementa tablas avanzadas usando **TanStack Table** en tres módulos principales:

##### Payments (Pagos)
```
payments/
├── columnsPayments.tsx    # Definición de columnas
├── data-table.tsx         # Componente de tabla reutilizable
├── pagePayments.tsx       # Página wrapper
└── payments.tsx           # Datos y lógica de negocio
```

##### Products (Productos)
```
products/
├── columnsProduct.tsx     # Definición de columnas de productos
├── data-table.tsx         # Tabla con filtros y ordenamiento
├── page.tsx               # Página de productos
└── products.tsx           # Modelo de datos de productos
```

##### Ventas
```
ventas/
├── columnsVentas.tsx      # Columnas de ventas
├── data-table-ventas.tsx  # Tabla especializada para ventas
└── ventas.tsx             # Lógica de ventas
```

**Características de las tablas:**
- ✅ Ordenamiento por cualquier columna
- ✅ Filtrado global y por columna
- ✅ Paginación con tamaño personalizable
- ✅ Selección múltiple de filas
- ✅ Acciones en línea (editar, eliminar, ver detalles)
- ✅ Responsive (adaptable a móviles)
- ✅ Exportación de datos

#### 5. **Sistema de Tipos TypeScript** (types/)

El proyecto utiliza TypeScript para garantizar la seguridad de tipos:

```typescript
// types/usuario.ts
interface Usuario {
  id: string;
  nombre: string;
  email: string;
  rol: 'admin' | 'user' | 'viewer';
  fechaCreacion: Date;
  // ... más propiedades
}
```

Esto proporciona:
- Autocompletado en el IDE
- Detección de errores en tiempo de desarrollo
- Documentación implícita del código
- Refactorización segura

#### 6. **Gestión de Datos** (data/)

Los datos se organizan en archivos separados:

- **usuarios.ts**: Lista de usuarios del sistema
- **ventasDiarias.tsx**: Datos de ventas por día

**Nota**: En producción, estos datos se conectarían a una API REST o base de datos real.

#### 7. **Utilidades** (lib/utils.ts)

Funciones helper como `cn()` para combinar clases de Tailwind:

```typescript
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Esta función es esencial para:
- Combinar clases condicionales
- Evitar conflictos de clases
- Mantener el código limpio

### 🎨 Sistema de Estilos

#### Tailwind CSS 4
El proyecto usa la última versión de Tailwind con:
- **Clases utility-first**: Estilos directamente en el HTML
- **Diseño responsive**: Breakpoints para móvil, tablet y desktop
- **Modo oscuro**: Sistema de temas integrado
- **Animaciones**: Transiciones y efectos suaves

#### Configuración de Temas
```css
/* global.css */
:root {
  --background: ...;
  --foreground: ...;
  --primary: ...;
  /* Variables CSS personalizadas */
}

.dark {
  /* Valores para modo oscuro */
}
```

### 🔄 Flujo de la Aplicación

1. **Entrada**: Usuario accede a `index.astro`
2. **Layout**: Se carga `main.astro` como plantilla
3. **Dashboard**: Se monta el componente `Dashboard.tsx`
4. **Navegación**: Usuario selecciona una opción del menú
5. **Vista**: Se renderiza la vista correspondiente
6. **Interacción**: El usuario interactúa con formularios, tablas, etc.
7. **Feedback**: El sistema muestra notificaciones y respuestas

### ⚡ Optimizaciones de Astro

Astro proporciona ventajas únicas:

- **Cero JavaScript por defecto**: Solo se envía JS cuando es necesario
- **Hidratación parcial**: Los componentes React solo se hidratan si tienen interactividad
- **Renderizado en servidor**: Páginas estáticas super rápidas
- **Builds optimizados**: Código dividido automáticamente

### 🧩 Patrones de Diseño Utilizados

1. **Component Composition**: Componentes pequeños y reutilizables
2. **State Management**: useState y props para gestión de estado
3. **Render Props**: Patrones de renderizado flexible
4. **Custom Hooks**: Lógica reutilizable (implícito en los componentes)
5. **Atomic Design**: Componentes UI atómicos y moleculares

### 🔐 Buenas Prácticas Implementadas

✅ **TypeScript**: Tipado estático para prevenir errores  
✅ **Componentes Modulares**: Fácil mantenimiento y testing  
✅ **Separación de Responsabilidades**: Cada archivo tiene un propósito claro  
✅ **Reutilización**: Componentes UI compartidos  
✅ **Accesibilidad**: Componentes Radix UI con ARIA  
✅ **Performance**: Optimizaciones de Astro y React  
✅ **Responsive**: Mobile-first design  
✅ **Mantenibilidad**: Código organizado y documentado  

---

## 🧞 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto en una terminal:

| Comando                   | Acción                                                      |
| :------------------------ | :---------------------------------------------------------- |
| `bun install`             | Instala las dependencias                                    |
| `bun dev`                 | Inicia el servidor de desarrollo en `localhost:4321`        |
| `bun build`               | Construye el sitio de producción en `./dist/`               |
| `bun preview`             | Previsualiza la construcción localmente antes de desplegar  |
| `bun astro ...`           | Ejecuta comandos CLI como `astro add`, `astro check`        |
| `bun astro -- --help`     | Obtén ayuda usando el CLI de Astro                          |

## 🚦 Inicio Rápido

1. **Clonar el repositorio**
   ```sh
   git clone <url-del-repositorio>
   cd dashboard-tailwind
   ```

2. **Instalar dependencias**
   ```sh
   bun install
   ```

3. **Iniciar el servidor de desarrollo**
   ```sh
   bun dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4321
   ```

## � Construcción para Producción

Para generar una versión optimizada para producción:

```sh
bun build
```

Los archivos se generarán en el directorio `./dist/` listos para ser desplegados.

## 🎨 Personalización

### Componentes UI
Los componentes UI se encuentran en `src/components/ui/` y pueden ser personalizados según las necesidades del proyecto. Están basados en el sistema de diseño de shadcn/ui con Radix UI.

**Para personalizar un componente:**

1. Navega a `src/components/ui/[componente].tsx`
2. Modifica las variantes, estilos o comportamiento
3. Los cambios se reflejarán automáticamente en toda la aplicación

### Temas y Colores

El proyecto soporta modo claro y oscuro. Para personalizar los colores:

1. Edita `src/styles/global.css`
2. Modifica las variables CSS en `:root` y `.dark`
3. Utiliza `next-themes` para la gestión de temas

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* Personaliza aquí */
}
```

### Agregar Nuevas Vistas

Para agregar una nueva sección al dashboard:

1. **Crear el componente de vista:**
   ```tsx
   // src/components/views/NuevaView.tsx
   export default function NuevaView() {
     return (
       <div>
         <h1>Nueva Sección</h1>
         {/* Tu contenido aquí */}
       </div>
     );
   }
   ```

2. **Importar en Dashboard.tsx:**
   ```tsx
   import NuevaView from '@/components/views/NuevaView';
   ```

3. **Agregar al tipo de vistas:**
   ```tsx
   type ViewType = 'crear-usuarios' | 'nueva-vista' | /* ... */;
   ```

4. **Agregar al switch de renderizado:**
   ```tsx
   case 'nueva-vista':
     return <NuevaView />;
   ```

5. **Agregar al menú lateral:**
   ```tsx
   <ItemLink onClick={() => handleViewChange('nueva-vista')}>
     Nueva Sección
   </ItemLink>
   ```

### Conectar con APIs

Los datos de ejemplo se encuentran en `src/data/`. Para conectar con una API real:

1. **Crear servicio de API:**
   ```typescript
   // src/services/api.ts
   export async function fetchUsuarios() {
     const response = await fetch('https://api.tudominio.com/usuarios');
     return response.json();
   }
   ```

2. **Usar en el componente:**
   ```tsx
   import { useEffect, useState } from 'react';
   import { fetchUsuarios } from '@/services/api';
   
   function ListadoView() {
     const [usuarios, setUsuarios] = useState([]);
     
     useEffect(() => {
       fetchUsuarios().then(setUsuarios);
     }, []);
     
     // Renderizar usuarios
   }
   ```

### Agregar Nuevos Componentes UI

Para agregar componentes de shadcn/ui:

```sh
# Ejemplo: agregar el componente toast
npx shadcn@latest add toast
```

El componente se agregará automáticamente a `src/components/ui/`

---

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Configura el proyecto:
   - **Framework Preset**: Astro
   - **Build Command**: `bun build`
   - **Output Directory**: `dist`
3. Despliega

### Netlify

1. Conecta tu repositorio a Netlify
2. Configura:
   - **Build command**: `bun build`
   - **Publish directory**: `dist`
3. Despliega

### GitHub Pages

```sh
# Construir para producción
bun build

# Desplegar en GitHub Pages
npx gh-pages -d dist
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 4321
CMD ["npm", "run", "preview"]
```

---

## 📚 Recursos Adicionales

- [Documentación de Astro](https://docs.astro.build)
- [Documentación de React](https://react.dev)
- [Documentación de Tailwind CSS](https://tailwindcss.com)
- [Radix UI](https://www.radix-ui.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TanStack Table](https://tanstack.com/table)
- [Recharts](https://recharts.org)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ usando Astro, React y Tailwind CSS**
