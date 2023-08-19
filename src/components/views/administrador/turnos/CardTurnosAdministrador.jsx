import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import FormularioEditarTurno from "./FormularioEditarTurno";
import { borrarTurno } from "../../../helpers/queriesTurnos";
import Swal from "sweetalert2";

const CardTurnosAdministrador = ({ turno, actualizarTurnos }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const eliminarTurno = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el turno y no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        borrarTurno(turno.id).then((respuesta) => {
          if (respuesta && respuesta.status === 200) {
            Swal.fire(
              "Turno eliminado",
              "El turno fue eliminado correctamente",
              "success"
            );
            actualizarTurnos();
          } else {
            Swal.fire("Error", "El turno no pudo ser eliminado", "error");
          }
        });
      }
    });
  };

  const ModalEditarTurno = ({ turno,actualizarTurnos }) => {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Editar Turno</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormularioEditarTurno
              turno={turno}
              handleClose={handleClose}
              actualizarTurnos={actualizarTurnos}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  };
  return (
    <>
        <td>{turno.paciente}</td>
        <td>{turno.fechaYHora}</td>
        <td>{turno.veterinario}</td>
        <td>{turno.detalleVisita}</td>
        <td className="d-flex justify-content-end">
          <Button variant="warning" onClick={handleShow}>
            Editar
          </Button>
          <Button variant="danger" onClick={eliminarTurno} className="mx-2">
            Borrar
          </Button>
        </td>
      <ModalEditarTurno turno={turno} actualizarTurnos={actualizarTurnos}/>
    </>
  );
};

export default CardTurnosAdministrador;
