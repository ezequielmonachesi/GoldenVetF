import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RowPaciente = ({ paciente}) => {
  return (
    <tr>
      <td>{paciente.mascota.nombre}</td>
      <td>{paciente.mascota.especie}</td>
      <td>{paciente.mascota.raza}</td>
      <td>{paciente.nombreDuenio}</td>
      <td>{paciente.telefono}</td>
      <td className="d-flex">
        <div>
          <Link className="bg-boton-planes btn text-white me-2" to={""}>
            Editar
          </Link>
        </div>
        <div>
          <Link className="bg-boton-planes btn text-white me-2" to={""}>
            Turno
          </Link>
        </div>
        <div>
          <Button variant="danger" className="me-2">
            Borrar
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default RowPaciente;
