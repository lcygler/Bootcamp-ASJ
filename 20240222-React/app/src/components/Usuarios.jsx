import React, { useEffect, useState } from "react";
import Usuario from "./Usuario";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsuarios(json))
      .catch((error) => console.log(error));
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Listado de Usuarios</h2>
      <table className="table table-hover align-middle">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <Usuario key={usuario.id} usuario={usuario} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Usuarios;
