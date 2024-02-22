const Producto = ({ producto }) => {
  return (
    <tr>
      <td>
        <img
          src={producto.thumbnail}
          alt={producto.title}
          style={{ width: "50px", height: "50px" }}
        />
      </td>
      <td>{producto.id}</td>
      <td>{producto.title}</td>
      <td>${producto.price.toFixed(2)}</td>
      <td>{producto.available_quantity}</td>
    </tr>
  );
};

export default Producto;
