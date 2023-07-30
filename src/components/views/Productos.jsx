import { Container, Row, Spinner } from "react-bootstrap";
import CardProducto from "./Producto/CardProducto";
import { useFetchData } from "../hooks/useFetchData";

const Productos = () => {
  const { data, isLoading } = useFetchData("productos");

  const mostrarProductos = () => {
    const baseURL = "http://localhost:5173";
    const currentURL = window.location.href;
    if (isLoading) {
      return (
        <div className="my-5 text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      );
    }

    if (!isLoading && data?.length <= 0) {
      return (
        <h3 className="text-danger p-3">
          Hubo un error al cargar los productos
        </h3>
      );
    }

    if (data && currentURL === `${baseURL}/productos`) {
      return data.map((producto) => (
        <CardProducto producto={producto} key={producto.id} />
      ));
    } else {
      let datos = data.map((producto) => (
        <CardProducto producto={producto} key={producto.id} />
      ));
      return datos.slice(0, 3);
    }
  };

  return (
    <Container className="mt-3">
      <h1 className="text-center texto-productos fw-bold mt-1">
        Nuestros Productos
      </h1>
      <hr />
      <Row className="d-flex justify-content-center">{mostrarProductos()}</Row>
    </Container>
  );
};

export default Productos;
