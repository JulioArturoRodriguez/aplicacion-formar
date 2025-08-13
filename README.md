
# 🖥️ Frontend - Gestión de Productos con React y Bootstrap

## 📦 Tecnologías utilizadas

| Tecnología            | Descripción                                              |
|----------------------|----------------------------------------------------------|
| React                | Biblioteca para construir interfaces de usuario         |
| React Router DOM     | Manejo de rutas y navegación en la SPA                |
| Bootstrap 5          | Framework CSS para estilos y componentes responsive     |
| React Icons          | Biblioteca de iconos para React                            |
| Vite                 | Herramienta rápida para desarrollo y empaquetado        |

---

## 🚀 Funcionalidades principales

1. **Navegación SPA** con React Router DOM  
2. **Interfaz responsiva** usando Bootstrap  
3. **Iconos** mediante React Icons  
4. **Estructura sencilla** para agregar componentes y rutas  

---

## 📁 Estructura del Proyecto

```

.vite/
.dist/
node_modules/
public/
  ├── vite.svg
src/
  ├── assets/
  │   └── react.svg
  ├── App.css
  ├── App.jsx
  ├── index.css
  ├── main.jsx
.gitignore
eslint.config.js
index.html
package-lock.json
package.json
README.md
vite.config.js

```

---

## ⚙️ Instalación y ejecución

```bash
# Clona el repositorio o copia este código en tu proyecto
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Luego abre en tu navegador la URL que Vite te indique (normalmente http://localhost:5173/).

---

## 📄 Ejemplo básico de código

### `main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### `App.jsx`

```jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BsBoxSeam } from "react-icons/bs";

function Home() {
  return (
    <div className="container mt-4">
      <h1><BsBoxSeam /> Gestión de Productos</h1>
      <p>Bienvenido a la interfaz de gestión de productos.</p>
      <Link to="/productos" className="btn btn-primary mt-3">Ver productos</Link>
    </div>
  );
}

function Productos() {
  return (
    <div className="container mt-4">
      <h2>Lista de productos</h2>
      {/* Aquí puedes conectar con API para mostrar productos */}
      <p>Listado de productos desde la API.</p>
      <Link to="/" className="btn btn-secondary mt-3">Volver</Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </Router>
  );
}
```




---

## 📝 Requisitos previos

* Node.js 18 o superior  
* npm  
* Navegador compatible para probar localmente

---

## 📲 Aplicación funcionando

![Captura 1](foto/Captura%20de%20pantalla%202025-07-06%20002002.png)
![Captura 2](foto/Captura%20de%20pantalla%202025-07-06%20002045.png)
![Captura 3](foto/Captura%20de%20pantalla%202025-07-06%20002149.png)
![Captura 4](foto/Captura%20de%20pantalla%202025-07-06%20002204.png)
![Captura 5](foto/Captura%20de%20pantalla%202025-07-06%20002516.png)
![Captura 6](foto/Captura%20de%20pantalla%202025-07-06%20004612.png)


## SUBI EL BACK PARA MOSTRAR LA BBDD Y QUE SE SEPA CON QUE DATOS LLENAR EL FORMULARIO



"API REST - Gestión de Productos"

(node) 
(express) 
(sqlite) 

(makarow) 

@description
Esta API REST permite gestionar productos de un inventario. Está construida con **Node.js**, **Express**, y utiliza **SQLite** como base de datos. Incluye validaciones, manejo de errores, y logs centralizados mediante **Winston**. Ideal para pequeñas tiendas, comercios o entornos educativos.

---

## 🚀 Funcionalidades

### 📦 1. Gestión de Productos

#### 📄 Obtener todos los productos
- **Ruta**: `GET /productos`
- **Descripción**: Devuelve todos los productos registrados.
- **Controlador**: `obtenerTodosLosProductosController`

#### 🔍 Obtener producto por ID
- **Ruta**: `GET /productos/:id`
- **Descripción**: Devuelve un producto según su ID.
- **Controlador**: `obtenerProductoPorIdController`

#### ➕ Agregar un nuevo producto
- **Ruta**: `POST /productos`
- **Descripción**: Crea un nuevo producto.
- **Validaciones**:
  - `nombre`: Requerido.
  - `precio`: Debe ser un número > 0.
  - `descripcion`: Requerido.
  - `stock`: Número entero >= 0.
  - `ventas`: Número entero >= 0.
  - `fecha_de_ingreso`: Fecha válida.
  - `fecha_de_salida`: Fecha válida.
  - `vendedor`: Requerido.
  - `categoria`: Debe ser una categoría válida.
- **Controlador**: `crearProductoController`

#### ♻️ Actualizar un producto
- **Ruta**: `PUT /productos/:id`
- **Descripción**: Actualiza los datos de un producto existente.
- **Controlador**: `actualizarProductoController`

#### ❌ Eliminar un producto
- **Ruta**: `DELETE /productos/:id`
- **Descripción**: Elimina un producto por su ID.
- **Controlador**: `eliminarProductoController`

 

### ✅ 2. Validaciones

Validaciones implementadas mediante middleware:

- Todos los campos son obligatorios.
- `categoria` debe ser una de las siguientes:
  - `frutas`, `verduras`, `lácteos`, `carnes`, `panadería`, `bebidas`, `otros`
- `precio`, `stock` y `ventas` deben ser valores numéricos válidos.

---

### 🪵 3. Logger

Sistema de logs implementado con **Winston** y rotación diaria:

- Logs almacenados en `/logs`:
  - `combined.log`
  - `error.log`
- Logging en consola habilitado en modo desarrollo (`NODE_ENV=development`)
- Soporte para niveles de log: `info`, `error`, entre otros.

---

## 📦 Tecnologías Utilizadas

| Tecnología   | Descripción                                     |
|--------------|-------------------------------------------------|
| Node.js      | Entorno de ejecución JavaScript en el backend. |
| Express.js   | Framework web para construir APIs REST.         |
| SQLite       | Base de datos liviana y embebida.               |
| Winston      | Sistema de logging profesional.                 |
| Makarow      | Generador de documentación automatizada.        |

---

## 🛠️ Requisitos Previos

Asegúrate de tener instalado:

- **Node.js v18+**
- **npm**
- **SQLite3** (cliente de línea de comandos o SQLite Browser)

---
