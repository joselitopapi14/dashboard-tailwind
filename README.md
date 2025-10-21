# 📊 Dashboard Empresarial con Astro + React + Tailwind

Un dashboard moderno y completo desarrollado con Astro, React y Tailwind CSS, diseñado para la gestión empresarial integral con módulos de ventas, inventario, usuarios, proyectos y métricas.

## 🚦 Inicio Rápido

### Prerrequisitos
- **Bun** instalado en tu sistema ([Instalar Bun](https://bun.sh))
- Git

### Pasos para ejecutar el proyecto

1. **Clonar el repositorio**
   ```sh
   git clone https://github.com/joselitopapi14/dashboard-tailwind.git
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
- **Tailwind CSS 4.1.14**: Framework CSS utility-first

### Utilidades
- **Flowbite**: Componentes adicionales
- **Lucide React**: Iconos modernos
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


## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ usando Astro, React y Tailwind CSS**
