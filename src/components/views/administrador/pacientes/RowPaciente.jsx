import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditarPaciente from "./EditarPaciente";
import FormularioAgregarMascota from "./FormularioAgregarMascota";
import { borrarPaciente } from "../../../helpers/queriesPacientes";
import Swal from "sweetalert2";

const RowPaciente = ({ paciente, refetchData }) => {
  const [modalShowEditarPaciente, setModalShowEditarPaciente] = useState(false);
  const [modalShowAgregarMascota, setModalShowAgregarMascota] = useState(false);

  function onFormAgregarMascotaSubmit() {
    setModalShowAgregarMascota(false);
  }

  function onFormEditarPacienteSubmit() {
    setModalShowEditarPaciente(false);
  }

  function borrar() {
    borrarPaciente(paciente.id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire('Paciente eliminado', `El paciente ${paciente.nombreDuenio} fue eliminada correctamente`, 'success');
        refetchData();
      } else {
        Swal.fire('Ocurrió un error', `El paciente ${paciente.nombreDuenio} no pudo ser eliminado, intente en unos minutos`, 'error');
      }
    })
  }

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <EditarPaciente paciente={paciente} refetchData={refetchData} onFormEditarPacienteSubmit={onFormEditarPacienteSubmit}></EditarPaciente>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalAgregarMascota(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Agregar mascota</Modal.Header>
        <Modal.Body>
          <FormularioAgregarMascota paciente={paciente} onFormAgregarMascotaSubmit={onFormAgregarMascotaSubmit} refetchData={refetchData}></FormularioAgregarMascota>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <tr>
        <td className="text-center">{paciente?.mascotas?.length}</td>
        <td>{paciente?.nombreDuenio} {paciente?.apellido}</td>
        <td>{paciente?.telefono}</td>
        <td className="d-flex">
          <div>
            <Button
              variant=""
              className="bg-boton-planes text-white me-2"
              onClick={() => setModalShowEditarPaciente(true)}
            >
              Editar
            </Button>
          </div>
          <div>
            <Button
              variant=""
              className="bg-boton-planes text-white me-2"
              onClick={() => setModalShowAgregarMascota(true)}
            >
              Agregar Mascota
            </Button>
          </div>
          <div>
            <Link className="bg-boton-planes btn text-white me-2" to={""}>
              Turno
            </Link>
          </div>
          <div>
            <Button onClick={() => borrar()} variant="danger" className="me-2">
              Borrar
            </Button>
          </div>
        </td>
      </tr>
      <MyVerticallyCenteredModal
        show={modalShowEditarPaciente}
        onHide={() => setModalShowEditarPaciente(false)}
      />
      <ModalAgregarMascota
        show={modalShowAgregarMascota}
        onHide={() => setModalShowAgregarMascota(false)}
      />
    </>
  );
};

export default RowPaciente;
