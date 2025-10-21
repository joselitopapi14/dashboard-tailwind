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

- **👥 Gestión de Usuarios**: Sistema completo de administración de usuarios
  - Crear nuevos usuarios
  - Listado completo de usuarios
  - Búsqueda y filtrado de usuarios
- **� Gestión de Proyectos**: Administración de proyectos empresariales



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


## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

---

**Desarrollado con ❤️ usando Astro, React y Tailwind CSS**
