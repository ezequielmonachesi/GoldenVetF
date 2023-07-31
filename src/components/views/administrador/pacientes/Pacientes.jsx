import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Pacientes = () => {
  return (
    <section className="container mainSection bg-white shadow my-5 py-4">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-4 ">Administrador Pacientes</h1>
        <Link className="bg-boton-planes btn text-white" to="">
          Agregar
        </Link>
      </div>
      <hr />
      <Table responsive striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Dueño</th>
            <th>Mascota</th>
            <th>Teléfono</th>
            <th>E-mail</th>
            <th>Categoria</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </Table>
    </section>
  );
};

export default Pacientes;
