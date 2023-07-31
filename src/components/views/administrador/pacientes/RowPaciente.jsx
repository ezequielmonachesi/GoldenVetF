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
        <Link
          className="bg-boton-planes btn text-white me-2"
          to={""}
        >
          Editar
        </Link>
        <Button variant="danger">
          Borrar
        </Button>
      </td>
    </tr>
  );
};

export default RowPaciente;
