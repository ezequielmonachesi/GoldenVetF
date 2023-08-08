import { Container, Row, Spinner } from "react-bootstrap";
import CardProducto from "./Producto/CardProducto";
import { useFetchData } from "../hooks/useFetchData";

const Productos = () => {
  const { data, isLoading } = useFetchData("productos");

  const mostrarProductos = () => {
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

   return data.map(producto=><CardProducto producto={producto} key={producto.id}/>)
  };

  return (
    <Container className="my-5">
      <div className="bg-light rounded shadow p-sm-2 p-md-5">
                <h1 className="text-center">Nuestros productos</h1>
                <hr />
                <p className="text-center plan-description">Desde alimentos de alta calidad hasta juguetes entretenidos, pasando por productos de higiene y cuidado, GoldenVet tiene todo lo que necesitas para mantener a tu querido amigo feliz y saludable en cada etapa de su vida.</p>
            </div>
      <Row className="d-flex justify-content-center my-5">{mostrarProductos()}</Row>
    </Container>
  );
};

export default Productos;
