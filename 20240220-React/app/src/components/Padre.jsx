import { useState } from "react";
import Hijo from "./Hijo";

const Padre = (props) => {
  const [textoPadre, setTextoPadre] = useState("Texto inicial en el padre");

  const actualizarTextoPadre = (nuevoTexto) => {
    setTextoPadre(nuevoTexto);
  };

  return (
    <div>
      <p>{textoPadre}</p>
      <p>{props.texto}</p>
      <Hijo texto="Texto recibido en el hijo" onButtonClick={actualizarTextoPadre} />
    </div>
  );
};

export default Padre;
