import { Modal, Table, Button, Container,Spinner } from "react-bootstrap";
import RowPaciente from "./RowPaciente";
import CrearPaciente from "./CrearPaciente";
import { useEffect, useState } from "react";
import { useFetchData } from "../../../hooks/useFetchData";

const Pacientes = () => {
  const [modalShow, setModalShow] = useState(false);

  const [pacientes, setPacientes] = useState([]);

  const { data, isLoading, error, refetchData } = useFetchData("pacientes");  
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter((paciente) =>
  paciente.nombreDuenio.toLowerCase().includes(searchTerm.toLowerCase())
);


  useEffect(() => {
    setPacientes(data);
  }, [data]);

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
          <CrearPaciente refetchData={refetchData}></CrearPaciente>
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
    <Container>
      <input
  type="text"
  placeholder="Buscar dueño..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

      <div className="">
        
        <div className="p-3 d-flex justify-content-end">
          <Button
            variant="success"
            onClick={() => setModalShow(true)}
          >
            Crear Paciente
          </Button>

          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </div>
      <hr />
      {isLoading ? (
            <div className="d-flex justify-content-center">
            <Spinner size="lg" variant="primary" />
            </div>
          ) :
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th className="col-1">N° Mascotas</th>
            <th>Dueño</th>
            <th>Teléfono</th>
            <th className="col-1"> Opciones</th>
          </tr>
        </thead>
        <tbody>
          {data && filteredData.map((paciente) => (
            <RowPaciente paciente={paciente} key={paciente.id} refetchData={refetchData}></RowPaciente>
          ))}
        </tbody>
      </Table>
}
    </Container>
  );
};

export default Pacientes;
