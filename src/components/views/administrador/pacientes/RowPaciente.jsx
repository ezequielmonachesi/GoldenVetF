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
