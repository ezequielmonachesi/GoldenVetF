import Swal from "sweetalert2";
import { borrarProducto } from "../../../helpers/queriesProductos";
import { Button,Modal } from "react-bootstrap";
import { useState } from "react";
import EditarProducto from "./EditarProducto";

const ListaProductos = ({
  producto,
  index,
  actualizarProductos,
}) => {
  const [modalShowEditar, setModalShowEditar] = useState(false);

  const eliminarProducto = (id) => {
    borrarProducto(id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto Eliminado!",
          "El producto fue eliminado correctamente",
          "success"
        );
        actualizarProductos();
      } else
        Swal.fire("Ocurrio un error", "No logro eliminar el producto", "error");
    });
  };
  return (
    <>
      <td className="truncarTexto">{producto.nombreProducto}</td>
      <td>{producto.precio}</td>
      <td className={producto.stock <= 5 ? "text-danger fw-bold" : ""}>
        {producto.stock}
      </td>
      <td className="text-truncate truncarTexto">{producto.descripcion}</td>
      <td className="text-truncate truncarTexto">{producto.imagen}</td>
      <td className="d-flex justify-content-end">
        <Button
          variant="warning"         
          onClick={() => setModalShowEditar(true)}
        >
          Editar
        </Button>
        <Button variant="danger" onClick={() => eliminarProducto(producto.id)}>
          Borrar
        </Button>
      </td>
      <VentanaModalEditarProducto
        producto={producto}
        actualizarProductos={actualizarProductos}
        className="modal-crud"
        show={modalShowEditar}
        onHide={() => setModalShowEditar(false)}
        setModalShowEditar={setModalShowEditar}
      ></VentanaModalEditarProducto>
    </>
  );
};
function VentanaModalEditarProducto(props) {
  const { setModalShowEditar,producto,actualizarProductos, ...restProps } = props;
  return (
    <Modal
      {...restProps}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <EditarProducto actualizarProductos={actualizarProductos} producto={producto} setModalShowEditar={setModalShowEditar}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Salir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ListaProductos;
