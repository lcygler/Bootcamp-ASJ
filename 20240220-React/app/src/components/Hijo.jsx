const Hijo = ({ texto, onButtonClick }) => {
  const handleClick = () => {
    onButtonClick("Texto actualizado desde el hijo");
  };

  return (
    <div>
      <p>{texto}</p>
      <button onClick={handleClick}>Actualizar texto en el padre</button>
    </div>
  );
};

export default Hijo;
