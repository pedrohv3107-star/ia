# Asistente Virtual de Fútbol

Aplicación web interactiva desarrollada con **React 19** y **Vite**, diseñada como un asistente de chat temático de fútbol con búsqueda y emparejamiento de respuestas por lenguaje natural (NLP).

---

## 📋 Requisitos Previos

- **Node.js**: Versión 18.x o superior recomendada
- **npm** (o gestor de paquetes de tu preferencia: `pnpm`, `yarn`)

---

## 🚀 Comandos de Inicialización y Ejecución

### 1. Instalación de dependencias
Instala todas las dependencias necesarias del proyecto (`lucide-react`, `react`, `react-dom`, `vite`, `oxlint`, etc.):
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
Inicia el entorno de desarrollo local con recarga rápida (HMR):
```bash
npm run dev
```
> La aplicación estará disponible por defecto en `http://localhost:5173`.

---

## 🛠️ Otros Comandos Disponibles

### Compilación para producción
Genera el paquete optimizado para producción en la carpeta `dist/`:
```bash
npm run build
```

### Previsualización de producción
Prueba localmente la versión compilada de producción:
```bash
npm run preview
```

### Análisis estático de código (Linter)
Ejecuta el linter ultrarrápido Oxlint para detectar errores y buenas prácticas:
```bash
npm run lint
```

---

## 📁 Estructura del Proyecto

```text
asistente/
├── public/                 # Archivos estáticos
├── src/
│   ├── components/         # Componentes de la interfaz (Topbar, Chat, Sidebar, etc.)
│   ├── nlp/                # Utilidades de procesamiento de lenguaje natural
│   ├── App.jsx             # Componente principal y lógica del asistente
│   ├── App.css             # Estilos de la aplicación
│   ├── index.css           # Estilos globales
│   └── main.jsx            # Punto de entrada de React
├── preguntas_respuestas.json # Base de conocimiento / Dataset de preguntas y respuestas
├── index.html              # HTML base
├── vite.config.js          # Configuración de Vite
└── package.json            # Scripts y dependencias
```
