import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RowPaciente = () => {
  return (
    <tr>
      <td>Algo</td>
      <td>Algo</td>
      <td>Algo</td>
      <td>Algo</td>
      <td>Algo</td>
      <td>
        <Link className="bg-boton-planes btn text-white me-2" to={""}>
          Editar
        </Link>
        <Link className="bg-boton-planes btn text-white me-2" to={""}>
          Asignar Turno
        </Link>
        <Button variant="danger" className="me-2">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default RowPaciente;
