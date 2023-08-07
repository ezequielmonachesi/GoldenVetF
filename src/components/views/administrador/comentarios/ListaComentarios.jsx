import { Button } from "react-bootstrap";
import { borrarComentario } from "../../../helpers/queriesComentarios";
import Swal from "sweetalert2";

const ListaComentarios = ({ comentario, actualizarComentarios }) => {

  const eliminarComentario = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará el comentario y no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        borrarComentario(comentario.id).then((respuesta) => {
          if (respuesta && respuesta.status === 200) {
            Swal.fire(
              "Comentario eliminado",
              "El comentario fue eliminado correctamente",
              "success"
            );
            actualizarComentarios();
          } else {
            Swal.fire("Error", "El comentario no pudo ser eliminado", "error");
          }
        });
      }
    });
  };

  const formatoFecha = (fecha) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    };
    return new Date(fecha).toLocaleString(undefined, options);
  };
  return (
    <>
      <tr>
        <td>{comentario.nombre}</td>
        <td className="truncarTexto">{comentario.comentario}</td>
        <td className="text-center">{comentario.puntuacion}</td>
        <td>{formatoFecha(comentario.creado)}</td>
        <td>
          <Button variant="danger" onClick={eliminarComentario} className="mt-2 mt-lg-0">
            Borrar Comentario
          </Button>
        </td>
      </tr>
    </>
  );
};

export default ListaComentarios;
