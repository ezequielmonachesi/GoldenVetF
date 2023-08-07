import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import EditarComentario from "./EditarComentario";
import { borrarComentario } from "../../../helpers/queriesComentarios";
import Swal from "sweetalert2";

const ListaComentarios = ({ comentario, actualizarComentarios }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const eliminarComentario = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el comentario y no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        borrarComentario(comentario.id).then((respuesta) => {
          if (respuesta && respuesta.status === 200) {
            Swal.fire(
              "Comentario eliminado",
              "El comentario fue eliminado correctamente",
              "success"
            );
            actualizarComentarios();
          } else {
            Swal.fire("Error", "El comentario no pudo ser eliminado", "error");
          }
        });
      }
    });
  };

  const ModalEditarComentario = ({ comentario }) => {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Editar Comentario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <EditarComentario
              comentario={comentario}
              handleClose={handleClose}
              actualizarComentarios={actualizarComentarios}
            />
          </Modal.Body>
        </Modal>
      </>
    );
  };
  return (
    <>
      <tr>
        <td>{comentario.nombre}</td>
        <td className="truncarTexto">{comentario.comentario}</td>
        <td>{comentario.puntuacion}</td>
        <td>{comentario.creado}</td>
        <td>
          <Button variant="warning" onClick={handleShow}>
            Editar Comentario
          </Button>
          <Button variant="danger" onClick={eliminarComentario}>
            Borrar Comentario
          </Button>
        </td>
      </tr>
      <ModalEditarComentario comentario={comentario} />
    </>
  );
};

export default ListaComentarios;
