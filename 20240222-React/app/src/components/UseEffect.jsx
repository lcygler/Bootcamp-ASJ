import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [valor, setValor] = useState(0);

  useEffect(() => {
    console.log("Componente cargado por primera vez");
  }, []);

  useEffect(() => {
    console.log("Componente cargado");
  });

  useEffect(() => {
    console.log("Valor modificado");
  }, [valor]);

  const cambiarEstado = () => {
    setValor(valor + 1);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4" style={{ paddingTop: "100px" }}>
      <h2 className="mb-4">Hook useEffect</h2>
      <button onClick={cambiarEstado} className="btn btn-primary">
        Click
      </button>
    </div>
  );
};

export default UseEffect;
