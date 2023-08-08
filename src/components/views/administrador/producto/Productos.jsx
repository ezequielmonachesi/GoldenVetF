import { useFetchData } from "../../../hooks/useFetchData";
import {
  Button,
  Container,
  Table,
  Modal,
  Spinner,
} from "react-bootstrap";
import { Clipboard2PlusFill } from "react-bootstrap-icons";
import { useState } from "react";
import ListaProductos from "./ListaProductos";
import CrearProducto from "./CrearProducto";

const Productos = () => {
    const { data, isLoading, refetchData } = useFetchData("productos");
    const [modalShow, setModalShow] = useState(false);



  const actualizarProductos = async () => {
    await refetchData();
  };

  return (
    <Container className="bg-white">
      <h1 className="m-5">Administrar Productos</h1>
      <h3>
        Agregar nuevo producto:{" "}
        <Button variant="success" onClick={() => setModalShow(true)}>
          <Clipboard2PlusFill />
        </Button>
        <VentanaModalCrearProducto
        className='modal-crud'
        show={modalShow}
        onHide={() => {
            setModalShow(false)
        }}
        actualizarProductos={actualizarProductos}
      ></VentanaModalCrearProducto>
      </h3>
      <hr />
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner size="lg" variant="primary" />
        </div>
      ) : (
        <Table responsive>
          <thead>
            <tr>
              <th>N°</th>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((producto, index) => (
              <tr key={producto.id}>
                <ListaProductos
                  producto={producto}
                  index={index}
                  actualizarProductos={actualizarProductos}
                />
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};
function VentanaModalCrearProducto(props) {
    const { actualizarProductos, ...restProps } = props;
  return (
    <Modal{...restProps} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <CrearProducto actualizarProductos={actualizarProductos} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Salir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}


export default Productos;
