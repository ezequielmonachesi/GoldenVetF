import React, { useState } from 'react';
import { Container, Table, Button, Spinner, Modal } from 'react-bootstrap';
import CardTurnosAdministrador from './CardTurnosAdministrador';
import { useFetchData } from '../../../hooks/useFetchData';
import FormularioTurno from '../../usuario/FormularioTurno';

const Turnos = () => {
  const { data, isLoading, refetchData } = useFetchData('turnos');
  const itemsPerPage = 8;
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

  const ModalCrearTurno = ({actualizarTurnos}) => {
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
        <div className="container p-3 d-flex justify-content-end">
          <Button variant='success' onClick={handleShow}>Crear Turno</Button>
        </div>
        {isLoading ? (
  <div className="d-flex justify-content-center">
    <Spinner size="lg" variant="primary" />
  </div>
) : (
  <Table responsive striped bordered hover>
    <thead>
      <tr>
        <th>Paciente</th>
        <th>Fecha y Hora</th>
        <th>Veterinario</th>
        <th>Detalle de la Visita</th>
        <th className="col-1">Opciones</th>
      </tr>
    </thead>
    <tbody>
      {data && data
        .slice(startIndex, endIndex)
        .sort((a, b) => new Date(a.fechaYHora) - new Date(b.fechaYHora))
        ?.map((turno) => (
          <tr key={turno.id}>
            <CardTurnosAdministrador
            turno={turno}
            key={turno.id}
            actualizarTurnos={actualizarTurnos}
            />
          </tr>
        ))}
    </tbody>
  </Table>
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
      <ModalCrearTurno actualizarTurnos={actualizarTurnos}/>
    </>

  );
};

export default Turnos;
