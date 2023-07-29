import { Container, Row, Spinner } from "react-bootstrap";
import CardProducto from "./Producto/CardProducto";
import { useFetchData } from "../hooks/useFetchData";

const Productos = () => {
  const { data, isLoading, error } = useFetchData("productos");

  const mostrarProductos = () => {
    if (isLoading) {
      return (
        <div className="my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      );
    }

    if (!isLoading && data?.length <= 0) {
      return <h3 className="text-danger border p-3">{error}</h3>;
    }

    return data.map((producto) => (
      <CardProducto producto={producto} key={producto.id} />
    ));
  };
  
  return (
    <Container className="mt-3">
      <h1 className="text-center texto-productos fw-bold mt-1">
        Nuestros Productos
      </h1>
      <hr />
      <Row>{mostrarProductos()}</Row>
    </Container>
  );
};

export default Productos;
