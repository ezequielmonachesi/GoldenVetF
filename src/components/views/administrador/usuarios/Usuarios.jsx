import { useEffect, useState } from "react";
import { obtenerUsuarios } from "../../../helpers/queriesUsuarios";
import Swal from "sweetalert2";
import { Button, Table,Modal } from "react-bootstrap";
import "./usuarios.css";
import CrearUsuario from "./CrearUsuario";
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

  const [modalShow, setModalShow] = useState(false);



  return (
    <>
      <Button
        variant="success my-4"
        className="boton-crearUsuario"
        onClick={() => setModalShow(true)}
      >
        Crear Usuario
      </Button>
      <VentanaModalcentrada
    show={modalShow}
    onHide={() => setModalShow(false)}
  ></VentanaModalcentrada>;
      <Table striped>
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

function VentanaModalcentrada(props){
  return(
    <Modal
    {...props}    
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton></Modal.Header>
    <Modal.Body>
      <CrearUsuario></CrearUsuario>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="danger" onClick={props.onHide}>
        Salir
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default Usuarios;
