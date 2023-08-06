import React, { useState } from 'react';
import { Col, Button, Modal } from 'react-bootstrap';
import FormularioEditarComentario from './FormularioEditarComentario';
import { borrarComentario } from '../../../helpers/queriesComentarios';
import Swal from 'sweetalert2';

const L = ({ comentario, actualizarComentarios }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const eliminarComentario = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción eliminará el comentario y no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        borrarComentario(comentario.id).then((respuesta) => {
          if (respuesta && respuesta.status === 200) {
            Swal.fire('Comentario eliminado', 'El comentario fue eliminado correctamente', 'success');
            actualizarComentarios();
          } else {
            Swal.fire('Error', 'El comentario no pudo ser eliminado', 'error');
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
            <FormularioEditarComentario comentario={comentario} handleClose={handleClose} actualizarComentarios={actualizarComentarios} />
          </Modal.Body>
        </Modal>
      </>
    );
  };
  return (
    <>
      <Col xs={12} md={6} lg={3}>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td>{comentario.nombre}</td>
                <td>{comentario.comentario}</td>
                <td>{comentario.puntuacion}</td>
                <td>{comentario.creado}</td>
                <td>
                  <div className="d-flex justify-content-around">
                    <Button variant="primary" onClick={handleShow}>
                      Editar Comentario
                    </Button>
                    <Button variant="danger" onClick={eliminarComentario}>
                      Borrar Comentario
                    </Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
      <ModalEditarComentario comentario={comentario} />
    </>
  );
};

export default CardComentarios;
