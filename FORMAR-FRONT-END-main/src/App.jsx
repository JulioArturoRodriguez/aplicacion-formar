import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({
    nombre: '',
    precio: '',
    descripcion: '',
    stock: '',
    ventas: '',
    fecha_de_ingreso: '',
    fecha_de_salida: '',
    vendedor: '',
    categoria: '',
  });

  const [modoEdicion, setModoEdicion] = useState(null);
  const [productoEditado, setProductoEditado] = useState({});

  // Campos para tabla y formulario
  const campos = [
    'nombre',
    'precio',
    'descripcion',
    'stock',
    'ventas',
    'fecha_de_ingreso',
    'fecha_de_salida',
    'vendedor',
    'categoria',
  ];

  const esFecha = (campo) => ['fecha_de_ingreso', 'fecha_de_salida'].includes(campo);
  const esNumeroEntero = (campo) => ['stock', 'ventas'].includes(campo);
  const esNumeroDecimal = (campo) => campo === 'precio';

  const formatearFecha = (fechaStr) => {
    if (!fechaStr) return '';
    return fechaStr.slice(0, 10);
  };

  useEffect(() => {
    fetch('http://localhost:3000/productos')
      .then((res) => res.json())
      .then((data) => {
        // Convertir ID a id para cada producto
        const productosNormalizados = data.map(({ ID, ...rest }) => ({
          id: ID,
          ...rest,
        }));
        setProductos(productosNormalizados);
      })
      .catch((err) => console.error('Error cargando productos:', err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (esNumeroEntero(name)) {
      setNuevoProducto({ ...nuevoProducto, [name]: value === '' ? '' : parseInt(value) });
    } else if (esNumeroDecimal(name)) {
      setNuevoProducto({ ...nuevoProducto, [name]: value === '' ? '' : parseFloat(value) });
    } else {
      setNuevoProducto({ ...nuevoProducto, [name]: value });
    }
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;

    if (esNumeroEntero(name)) {
      setProductoEditado({ ...productoEditado, [name]: value === '' ? '' : parseInt(value) });
    } else if (esNumeroDecimal(name)) {
      setProductoEditado({ ...productoEditado, [name]: value === '' ? '' : parseFloat(value) });
    } else {
      setProductoEditado({ ...productoEditado, [name]: value });
    }
  };

  const agregarProducto = () => {
    fetch('http://localhost:3000/productos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nuevoProducto),
    })
      .then((res) => res.json())
      .then((data) => {
        // data.id es el id del nuevo producto desde backend
        setProductos([...productos, { id: data.id, ...nuevoProducto }]);
        setNuevoProducto({
          nombre: '',
          precio: '',
          descripcion: '',
          stock: '',
          ventas: '',
          fecha_de_ingreso: '',
          fecha_de_salida: '',
          vendedor: '',
          categoria: '',
        });
      })
      .catch((err) => console.error('Error al agregar producto:', err));
  };

  const eliminarProducto = (id) => {
    fetch(`http://localhost:3000/productos/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setProductos(productos.filter((p) => p.id !== id));
      })
      .catch((err) => console.error('Error al eliminar:', err));
  };

  const comenzarEdicion = (producto) => {
    setModoEdicion(producto.id);
    setProductoEditado({ ...producto });
  };

  const cancelarEdicion = () => {
    setModoEdicion(null);
    setProductoEditado({});
  };

 const guardarEdicion = (id) => {
  
  const productoConId = { ...productoEditado, id };

  fetch(`http://localhost:3000/productos/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(productoConId),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('Error en la respuesta del servidor');
      }
      
      setProductos(productos.map((p) => (p.id === id ? productoConId : p)));
      cancelarEdicion(); 
    })
    .catch((err) => {
      console.error('Error al editar:', err);
      alert('Hubo un error al guardar los cambios.');
    });
};


  return (
    <div className="app-container">
      <div className="content-container shadow-sm rounded bg-white">
        <h2
          className="text-center mb-4"
          style={{ fontFamily: "'Orbitron', sans-serif", color: '#437743' }}
        >
          Listado de Productos
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-secondary text-center">
              <tr>
                <th>ID</th>
                {campos.map((campo) => (
                  <th key={campo}>{campo.replace(/_/g, ' ')}</th>
                ))}
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Fila para nuevo producto */}
              <tr>
                <td className="text-center">#</td>
                {campos.map((campo) => (
                  <td key={campo}>
                    <input
                      name={campo}
                      type={
                        esFecha(campo)
                          ? 'date'
                          : esNumeroEntero(campo)
                          ? 'number'
                          : esNumeroDecimal(campo)
                          ? 'number'
                          : 'text'
                      }
                      step={esNumeroDecimal(campo) ? '0.01' : '1'}
                      className="form-control form-control-sm"
                      value={nuevoProducto[campo]}
                      onChange={handleChange}
                    />
                  </td>
                ))}
                <td className="text-center">
                  <button
                    className="btn btn-success btn-sm"
                    onClick={agregarProducto}
                    title="Agregar"
                  >
                    <i className="bi bi-plus-circle-fill"></i>
                  </button>
                </td>
              </tr>

              {/* Lista de productos */}
              {productos.map((prod) => (
                <tr key={prod.id}>
                  <td className="text-center">{prod.id}</td> {/* Mostrar ID */}
                  {modoEdicion === prod.id ? (
                    campos.map((campo) => (
                      <td key={campo}>
                        <input
                          name={campo}
                          type={
                            esFecha(campo)
                              ? 'date'
                              : esNumeroEntero(campo)
                              ? 'number'
                              : esNumeroDecimal(campo)
                              ? 'number'
                              : 'text'
                          }
                          step={esNumeroDecimal(campo) ? '0.01' : '1'}
                          className="form-control form-control-sm"
                          value={
                            productoEditado[campo] !== undefined
                              ? productoEditado[campo]
                              : esFecha(campo)
                              ? formatearFecha(prod[campo])
                              : prod[campo]
                          }
                          onChange={handleEditChange}
                        />
                      </td>
                    ))
                  ) : (
                    campos.map((campo) => (
                      <td key={campo} className={esNumeroEntero(campo) ? 'text-end' : ''}>
                        {esFecha(campo) ? formatearFecha(prod[campo]) : prod[campo]}
                      </td>
                    ))
                  )}
                  <td className="text-center">
                    {modoEdicion === prod.id ? (
                      <>
                        <button
                          className="btn btn-success btn-sm me-1"
                          title="Guardar"
                          onClick={() => guardarEdicion(prod.id)}
                        >
                          <i className="bi bi-check-lg"></i>
                        </button>
                        <button
                          className="btn btn-secondary btn-sm"
                          title="Cancelar"
                          onClick={cancelarEdicion}
                        >
                          <i className="bi bi-x-lg"></i>
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-primary btn-sm me-1"
                          title="Editar"
                          onClick={() => comenzarEdicion(prod)}
                        >
                          <i className="bi bi-pencil-fill"></i>
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          title="Eliminar"
                          onClick={() => eliminarProducto(prod.id)}
                        >
                          <i className="bi bi-trash-fill"></i>
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
