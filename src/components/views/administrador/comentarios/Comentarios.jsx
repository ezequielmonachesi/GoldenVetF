import { useState } from "react";
import { Container, Table, Button, Spinner, Modal } from "react-bootstrap";
import ListaComentarios from "./ListaComentarios";
import { useFetchData } from "../../../hooks/useFetchData";
import CrearComentario from "./CrearComentario";

const Comentarios = () => {
  const { data, isLoading, refetchData } = useFetchData("comentarios");
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter((comentario) =>
  comentario.nombre.toLowerCase().includes(searchTerm.toLowerCase())
);


  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const actualizarComentarios = async () => {
    await refetchData();
  };

  const ModalCrearComentario = ({actualizarComentarios}) => {
    return (
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter" centered
        >
          <Modal.Header closeButton>
            <Modal.Title>Crear Comentario</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CrearComentario actualizarComentarios={actualizarComentarios}/>
          </Modal.Body>
        </Modal>
    );
  };

  return (
    <>
      <Container className="mt-2">

      <input
  type="text"
  placeholder="Buscar comentario de..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>


        <div className="d-flex justify-content-end my-3">
          <Button onClick={()=>setShow(true)} variant="success">
            Crear Comentario
          </Button>
        </div>
        {data.length > 0 ? (
          <Table responsive striped bordered hover>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Comentario</th>
                <th>Puntuación</th>
                <th>Creado</th>
                <th className="col-1">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="text-center">
                    <Spinner animation="border" variant="primary" />
                  </td>
                </tr>
              ) : (
                data && filteredData 
                  .slice(startIndex, endIndex)
                  .sort((a, b) => new Date(a.creado) - new Date(b.creado))
                  .map((comentario) => (
                    <ListaComentarios
                      comentario={comentario}
                      key={comentario.id}
                      actualizarComentarios={actualizarComentarios}
                    />
                  ))
              )}
            </tbody>
          </Table>
        ) : (
          <div className="text-center">
            <h3>No hay comentarios</h3>
          </div>
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
      <ModalCrearComentario actualizarComentarios={actualizarComentarios}/>
    </>
  );
};

export default Comentarios;
