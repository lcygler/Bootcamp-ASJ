const Usuario = ({ usuario }) => {
  return (
    <tr>
      <td>{usuario.id}</td>
      <td>{usuario.name}</td>
      <td>{usuario.username}</td>
      <td>{usuario.email}</td>
    </tr>
  );
};

export default Usuario;
