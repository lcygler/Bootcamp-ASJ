import React, { useState } from "react";
import dado1 from "../assets/img/dado-1.png";
import dado2 from "../assets/img/dado-2.png";
import dado3 from "../assets/img/dado-3.png";
import dado4 from "../assets/img/dado-4.png";
import dado5 from "../assets/img/dado-5.png";
import dado6 from "../assets/img/dado-6.png";

const Dados = () => {
  const [valorDado1, setValorDado1] = useState(0);
  const [valorDado2, setValorDado2] = useState(0);
  const [mostrarResultado, setMostrarResultado] = useState(false);

  const dados = [dado1, dado2, dado3, dado4, dado5, dado6];

  const lanzarDados = () => {
    setMostrarResultado(false);

    setTimeout(actualizarValor, 100);
    setTimeout(actualizarValor, 200);
    setTimeout(actualizarValor, 400);
    setTimeout(actualizarValor, 700);
    setTimeout(() => {
      actualizarValor();
      setMostrarResultado(true);
    }, 1200);
  };

  const actualizarValor = () => {
    const numero1 = Math.floor(Math.random() * 6) + 1;
    const numero2 = Math.floor(Math.random() * 6) + 1;

    setValorDado1(numero1);
    setValorDado2(numero2);
  };

  return (
    <div className="d-flex flex-column align-items-center mt-4" style={{ paddingTop: "100px" }}>
      <button onClick={lanzarDados} className="btn btn-primary mb-4">
        Lanzar dados
      </button>

      {valorDado1 !== 0 && (
        <>
          <div className="mb-4">
            <img
              src={dados[valorDado1 - 1]}
              alt="Dado 1"
              className="me-4"
              style={{ width: "200px" }}
            />
            <img src={dados[valorDado2 - 1]} alt="Dado 2" style={{ width: "200px" }} />
          </div>

          {mostrarResultado && (
            <p className="h4">
              El resultado es: <strong>{valorDado1 + valorDado2}</strong>
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Dados;
