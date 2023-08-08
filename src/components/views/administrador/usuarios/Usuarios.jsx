import {useState } from "react";
import {
  borrarUsuario,
} from "../../../helpers/queriesUsuarios";
import Swal from "sweetalert2";
import { Button, Table, Modal, Spinner, Container } from "react-bootstrap";
import "./usuarios.css";
import CrearUsuario from "./CrearUsuario";
import EditarUsuario from "./EditarUsuario";
import { useFetchData } from "../../../hooks/useFetchData";

const Usuarios = () => {
  const {data, isLoading,refetchData } = useFetchData('usuarios');
  const [modalShow, setModalShow] = useState(false);
  const [modalShowEditar, setModalShowEditar] = useState(false);
  const [id, setId] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter((usuario) =>
  usuario.nombreUsuario.toLowerCase().includes(searchTerm.toLowerCase())
);

  const handleBorrarUsuario = (usuario) => {
    borrarUsuario(usuario.id).then((respuesta) => {
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
                actualizarUsuarios();
          } else {
            Swal.fire(
              "A ocurrido un error",
              `El usuario ${usuario.nombreUsuario} no pudo ser eliminado`,
              "error"
            );
          }
        }
      });
    });
  };

   const actualizarUsuarios = async () => {
    await refetchData();
  };


  const handleEditarUsuario = (id) => {
    setId(id);
    setModalShowEditar(true);
  };



  return (
    <Container>

<input
  type="text"
  placeholder="Buscar usuario..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>


      <div className="p-3 d-flex justify-content-end">
        <Button
          variant="success"         
          onClick={() => setModalShow(true)}
        >
          Crear Usuario
        </Button>
      </div>
     
      <VentanaModalCrearUsuario
      className='modal-crud'
        show={modalShow}
        onHide={() => {
            setModalShow(false)
        }}
        actualizarUsuarios={actualizarUsuarios}
      ></VentanaModalCrearUsuario>
       {id && (
        <VentanaModalEditarUsuario
          className='modal-crud'
          show={modalShowEditar}
          onHide={() => setModalShowEditar(false)}
          id={id}
          actualizarUsuarios={actualizarUsuarios}
        />
      )}

    {isLoading ? (
            <div className="d-flex justify-content-center">
            <Spinner size="lg" variant="primary" />
            </div>
          ) :

      <Table responsive striped bordered hover>
        <thead>
          <tr>            
            <th>Nombre Usuario</th>
            <th>Email</th>
            <th>Rol</th>
            <th className="col-1">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            filteredData?.map((usuario, index) => (
              <tr key={index}>                
                <td>{usuario.nombreUsuario}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
                <td className="d-flex justify-content-end">
                  <Button
                    onClick={() => handleEditarUsuario(usuario.id)}
                    variant="warning"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => handleBorrarUsuario(usuario)}
                    variant="danger"
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
}
    </Container>
  );
};

function VentanaModalCrearUsuario(props) {
    const { actualizarUsuarios, ...restProps } = props;
  return (
    <Modal {...restProps} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <CrearUsuario actualizarUsuarios={actualizarUsuarios} />
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
    const { actualizarUsuarios, ...restProps } = props;
  return (
    <Modal {...restProps} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <EditarUsuario id={props.id} actualizarUsuarios={actualizarUsuarios}/>
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
