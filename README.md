# Restaurant Landing Page

Landing page para restaurante desarrollada con React y TypeScript.

## Stack

- React 18
- TypeScript 5.6
- Vite 6
- Tailwind CSS 3
- Lucide React (iconos)
- PWA (vite-plugin-pwa)

## Estructura

```
src/
├── components/
│   ├── Header.tsx       # Navegación principal
│   ├── Hero.tsx         # Sección principal
│   ├── About.tsx        # Información del restaurante  
│   ├── Menu.tsx         # Menú de platos
│   ├── Specialties.tsx  # Especialidades
│   ├── Testimonials.tsx # Opiniones de clientes
│   ├── Reservations.tsx # Formulario de reservas
│   ├── Contact.tsx      # Información de contacto
│   ├── Footer.tsx       # Pie de página
│   └── WhatsAppButton.tsx # Botón flotante WhatsApp
└── index.css            # Estilos globales con Tailwind
```

## Instalación

```bash
# Clonar repo
git clone git@github.com:ander0code/restaurant-landing-page.git
cd restaurant-landing-page

# Instalar dependencias
pnpm install

# Desarrollo
pnpm dev

# Build producción
pnpm build

# Preview
pnpm preview
```

## Características

- Single Page Application
- Diseño responsive (mobile-first)
- Secciones: Hero, About, Menu, Specialties, Testimonials, Reservations, Contact
- Botón flotante de WhatsApp
- Animaciones suaves con Tailwind
- PWA habilitado (instalable)

## Scripts

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Servidor de desarrollo |
| `pnpm build` | Build de producción |
| `pnpm preview` | Preview del build |
| `pnpm lint` | Ejecutar ESLint |

## Licencia

MIT
