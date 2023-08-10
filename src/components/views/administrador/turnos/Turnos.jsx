import { useState } from "react";
import { Container, Table, Button, Spinner, Modal } from "react-bootstrap";
import CardTurnosAdministrador from "./CardTurnosAdministrador";
import { useFetchData } from "../../../hooks/useFetchData";
import FormularioTurno from "../../usuario/FormularioTurno";

const Turnos = () => {
  const { data, isLoading, refetchData } = useFetchData("turnos");
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);
  const [modalShow, setModalShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter((turno) =>
    turno.paciente.toLowerCase().includes(searchTerm.toLowerCase())
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

  const actualizarTurnos = async () => {
    await refetchData();
  };

  return (
    <>
      <Container>
        <input
          type="text"
          placeholder="Buscar paciente..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="container p-3 d-flex justify-content-end">
          <Button variant="success" onClick={()=>setModalShow(true)}>
            Crear Turno
          </Button>
        </div>
        <VentanaModalCrearTurnos
        actualizarTurnos={actualizarTurnos}
        show={modalShow}
        className="modal-crud"
        onHide={() => {
          setModalShow(false);
        }}
      ></VentanaModalCrearTurnos>
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
              {data &&
                filteredData
                  .slice(startIndex, endIndex)
                  .sort(
                    (a, b) => new Date(a.fechaYHora) - new Date(b.fechaYHora)
                  )
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
    </>
  );
};
function VentanaModalCrearTurnos(props) {
  const { actualizarTurnos, ...restProps } = props;
  return (
    <Modal
      {...restProps}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <FormularioTurno actualizarTurnos={actualizarTurnos} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Salir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Turnos;
