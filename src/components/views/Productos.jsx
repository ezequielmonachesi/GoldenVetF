import { Container, Row, Spinner } from "react-bootstrap";
import CardProducto from "./Producto/CardProducto";
import { useFetchData } from "../hooks/useFetchData";

const Productos = () => {
  const { data, isLoading } = useFetchData("productos");

  return (
    <Container className="my-5">
      <div className="bg-light rounded shadow p-sm-2 p-md-5">
        <h1 className="text-center">Nuestros productos</h1>
        <hr />
        <p className="text-center plan-description">
          Desde alimentos de alta calidad hasta juguetes entretenidos, pasando
          por productos de higiene y cuidado, Golden Vet tiene todo lo que
          necesitas para mantener a tu querido amigo feliz y saludable en cada
          etapa de su vida.
        </p>
      </div>
      <Row className="d-flex justify-content-center my-5">
      {isLoading ? (
          <div className="my-5 text-center">
            <Spinner animation="border" variant="primary" />
          </div>
        ) : data && data.length > 0 ? (
          data.map((producto) => (
            <CardProducto producto={producto} key={producto.id} />
          ))
        ) : (
          <h3 className="text-danger p-3">
            Hubo un error al cargar los productos. Por favor, inténtalo de nuevo
            más tarde.
          </h3>
        )}
      </Row>
    </Container>
  );
};

export default Productos;
