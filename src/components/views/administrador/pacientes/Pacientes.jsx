import { Modal, Table, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RowPaciente from "./RowPaciente";
import CrearPaciente from "./CrearPaciente";
import { useEffect, useState } from "react";
import { obtenerPacientes } from "../../../helpers/queriesPacientes";
import Swal from "sweetalert2";

const Pacientes = () => {
  const [modalShow, setModalShow] = useState(false);
  const [pacientes, setPacientes] = useState([]);

  useEffect(() => {
    obtenerPacientes().then((respuesta) => {
      if (respuesta) {
        setPacientes(respuesta);
        console.log(respuesta);
      } else {
        Swal.fire("Ocurrió un error", "No se puede obtener pacientes", "error");
      }
    });
  }, []);

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
          <CrearPaciente></CrearPaciente>
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
    <section className="container mainSection bg-white shadow-lg my-md-5 py-4 rounded-3">
      <div className="">
        <h1 className="display-4 text-center">Administrador Pacientes</h1>
        <div className="text-end">
          <Button
            variant=""
            className="bg-boton-planes text-white"
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
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Especie</th>
            <th>Raza</th>
            <th>Dueño</th>
            <th>Teléfono</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <RowPaciente paciente={paciente} key={paciente.id}></RowPaciente>
          ))}
        </tbody>
      </Table>
    </section>
  );
};

export default Pacientes;
