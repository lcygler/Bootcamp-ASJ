// Productos.jsx
import React, { useState } from "react";
import Producto from "./Producto";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);

    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
      .then((response) => response.json())
      .then((json) => {
        setProductos(json.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  const handleKeyUp = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Listado de Productos</h2>

      <div className="mb-3 d-flex align-items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={handleKeyUp}
          placeholder="Ingrese su búsqueda..."
          className="form-control me-2"
        />
        <button onClick={handleSearch} className="btn btn-primary">
          Buscar
        </button>
      </div>

      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ height: "500px" }}
        >
          <span className="loader"></span>
        </div>
      )}

      {!loading && (
        <table className="table table-hover align-middle">
          <thead>
            <tr>
              <th></th>
              <th>ID</th>
              <th>Título</th>
              <th>Precio</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <Producto key={producto.id} producto={producto} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Productos;
