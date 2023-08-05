import React, { useState } from 'react';
import { Container, Row, Button, Spinner, Modal } from 'react-bootstrap';
import CardTurnosAdministrador from './CardTurnosAdministrador';
import { useFetchData } from '../../../hooks/useFetchData';
import FormularioTurno from '../../usuario/FormularioTurno';

const Turnos = () => {
  const { data, isLoading, refetchData } = useFetchData('turnos');
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const actualizarTurnos = async () => {
    await refetchData();
  };

  const ModalCrearTurno = () => {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Crear Turno</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormularioTurno actualizarTurnos={actualizarTurnos} />
          </Modal.Body>
        </Modal>
      </>
    );
  };

  return (
    <>
      <Container>
        <div className="d-flex justify-content-end">
          <Button onClick={handleShow}>Crear Turno</Button>
        </div>
        {data.length > 0 ? (
          <Row>
            {isLoading ? (
              <Spinner size="lg" variant="primary" />
            ) : (
              data
                .slice(startIndex, endIndex)
                .map((turno) => (
                  <CardTurnosAdministrador
                    turno={turno}
                    key={turno.id}
                    actualizarTurnos={actualizarTurnos}
                  />
                ))
            )}
          </Row>
        ) : (
          <div className='text-center'><h3>No hay Turnos reservados</h3></div>
        )}
        {data.length > 0 && (
          <div className="d-flex justify-content-center mt-3">
            <Button
              variant="secondary"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="me-3"
            >
              Anterior
            </Button>
            <Button
              variant="secondary"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Siguiente
            </Button>
          </div>
        )}
      </Container>
      <ModalCrearTurno />
    </>
  );
};

export default Turnos;
