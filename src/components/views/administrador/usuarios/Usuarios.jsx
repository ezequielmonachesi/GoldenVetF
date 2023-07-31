import { useEffect, useState } from "react";
import { obtenerUsuarios } from "../../../helpers/queriesUsuarios";
import Swal from "sweetalert2";
import { Button, Table } from "react-bootstrap";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    obtenerUsuarios().then((respuesta) => {
      if (respuesta) {
        setUsuarios(respuesta);
      } else {
        Swal.fire("Ocurrió un error", "Intente más tarde", "error");
      }
    });
  }, []);

  return (
    <>
      <Table className="table">
        <thead>
          <tr>
            <th>Nombre Usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Administrar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios &&
            usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.nombreUsuario}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
                <td> 
                  <Button variant="warning">Editar</Button>
                  <Button variant="danger">Borrar</Button>
                </td>                
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

export default Usuarios;
