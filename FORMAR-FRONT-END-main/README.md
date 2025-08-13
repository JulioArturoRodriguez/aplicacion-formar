
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



