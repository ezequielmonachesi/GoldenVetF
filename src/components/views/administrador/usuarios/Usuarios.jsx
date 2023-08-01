import { useEffect, useState } from "react";
import { borrarUsuario, obtenerUsuarios } from "../../../helpers/queriesUsuarios";
import Swal from "sweetalert2";
import { Button, Table, Modal } from "react-bootstrap";
import "./usuarios.css";
import CrearUsuario from "./CrearUsuario";
import EditarUsuario from "./EditarUsuario";
const Usuarios = () => {


  const [usuarios, setUsuarios] = useState([]);
  const [id, setId] = useState(null);
  const handleBorrarUsuario = (usuario) =>{
    borrarUsuario(usuario.id).then((respuesta)=>{
      Swal.fire({
        title: "Esta seguro?",
        text: "No podrás ser capaz de revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo!",
      }).then((result) => {
        if (result.isConfirmed) {
          if (respuesta && respuesta.status === 200) {
            Swal.fire(
              "Usuario eliminado",
              `El usuario ${usuario.nombreUsuario} fue eliminado correctamente`,
              "success"
            );
                obtenerUsuarios().then((respuesta)=> {
                    if (respuesta){
                        setUsuarios(respuesta)
                    }
                })
          } else {
            Swal.fire(
              "A ocurrido un error",
              `El usuario ${usuario.nombreUsuario} no pudo ser eliminado`,
              "error"
            );
          }
        }
      });
    })
  }

  const handleEditarUsuario = (id) => {
    setId(id);
    setModalShowEditar(true);
  };

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
  const [modalShowEditar, setModalShowEditar] = useState(false);

  return (
    <>
      <Button
        variant="success my-4"
        className="boton-crearUsuario"
        onClick={() => setModalShow(true)}
      >
        Crear Usuario
      </Button>
      <VentanaModalCrearUsuario
        show={modalShow}
        onHide={() => setModalShow(false)}
      ></VentanaModalCrearUsuario>
      ;
      {id && (
        <VentanaModalEditarUsuario
          show={modalShowEditar}
          onHide={() => setModalShowEditar(false)}
          id={id}
        />
      )}
      <Table responsive striped>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre Usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Administrar</th>
          </tr>
        </thead>
        <tbody>
          {usuarios &&
            usuarios?.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombreUsuario}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
                <td>
                  <Button
                    onClick={() => handleEditarUsuario(usuario.id)}
                    variant="warning"
                  >
                    Editar
                  </Button>
                  <Button 
                  onClick={()=>handleBorrarUsuario(usuario)}
                  variant="danger">Borrar</Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};

function VentanaModalCrearUsuario(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
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
  );
}
function VentanaModalEditarUsuario(props) {
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <EditarUsuario id={props.id} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Salir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Usuarios;
