import { useFetchData } from "../../../hooks/useFetchData";
import { Button, Container, Table, Modal, Spinner } from "react-bootstrap";
import { useState } from "react";
import ListaProductos from "./ListaProductos";
import CrearProducto from "./CrearProducto";

const Productos = () => {
  const { data, isLoading, refetchData } = useFetchData("productos");
  const [modalShow, setModalShow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = data.filter((producto) =>
    producto.nombreProducto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const actualizarProductos = async () => {
    await refetchData();
  };

  return (
    <Container>
      <input
        type="text"
        placeholder="Buscar producto..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="p-3 d-flex justify-content-end">
        <Button variant="success" onClick={() => setModalShow(true)}>
          Crear Producto
        </Button>
      </div>
      <VentanaModalCrearProducto
        className="modal-crud"
        show={modalShow}
        onHide={() => {
          setModalShow(false);
        }}
        actualizarProductos={actualizarProductos}
      ></VentanaModalCrearProducto>

      <hr />
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner size="lg" variant="primary" />
        </div>
      ) : (
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Stock</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th className="col-1">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              filteredData.map((producto, index) => (
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
    <Modal
      {...restProps}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
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
