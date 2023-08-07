import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import EditarPaciente from "./EditarPaciente";
import FormularioAgregarMascota from "./FormularioAgregarMascota";

const RowPaciente = ({ paciente }) => {
  const [modalShowEditarPaciente, setModalShowEditarPaciente] = useState(false);
  const [modalShowAgregarMascota, setModalShowAgregarMascota] = useState(false);

  function onFormAgregarMascotaSubmit() {
    setModalShowAgregarMascota(false);
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
          <EditarPaciente></EditarPaciente>
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
          <FormularioAgregarMascota paciente={paciente} onFormSubmit={onFormAgregarMascotaSubmit}></FormularioAgregarMascota>
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
        <td>{paciente?.mascotas[0]?.nombre}</td>
        <td>{paciente?.mascotas[0]?.especie}</td>
        <td>{paciente?.mascotas[0]?.raza}</td>
        <td>{paciente?.nombreDuenio}</td>
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
            <Button variant="danger" className="me-2">
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
