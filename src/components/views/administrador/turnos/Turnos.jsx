import React, { useState } from 'react';
import { Container, Row, Button, Spinner } from 'react-bootstrap';
import CardTurnosAdministrador from './CardTurnosAdministrador';
import { useFetchData } from '../../../hooks/useFetchData';

const Turnos = () => {
  const { data, isLoading } = useFetchData('turnos');
  const itemsPerPage = 8; // Define la cantidad de elementos por página.
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <Container className='p-3'>
        <div className="text-center">
          <Button>Crear Turno</Button>
        </div>
        <Row className="mt-5 shadow-lg p-3 mb-5 bg-white rounded">
          {isLoading ? (
            <Spinner size="lg" variant="primary" />
          ) : (
            data.slice(startIndex, endIndex).map((turno) => (
              <CardTurnosAdministrador turno={turno} key={turno.id} />
            ))
          )}
        </Row>
        <div className="d-flex justify-content-center mt-3">
          <Button variant="secondary" onClick={handlePrevPage} disabled={currentPage === 1}>
            Anterior
          </Button>
          <Button variant="secondary" onClick={handleNextPage} disabled={currentPage === totalPages}>
            Siguiente
          </Button>
        </div>
      </Container>
    </>
  );
};

export default Turnos;
