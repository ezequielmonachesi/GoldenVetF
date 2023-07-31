import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import RowPaciente from "./RowPaciente";
import CrearPaciente from "./CrearPaciente";

const Pacientes = () => {
  return (
    <section className="container mainSection bg-white shadow my-5 py-4">
      <div className="">
        <h1 className="display-4 text-center">Administrador Pacientes</h1>
        <div className="text-end">
          <Link
            className="bg-boton-planes btn text-white"
            to="/pacientes/nuevo-paciente"
          >
            Crear Paciente
          </Link>
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
          <RowPaciente></RowPaciente>
        </tbody>
      </Table>
    </section>
  );
};

export default Pacientes;
