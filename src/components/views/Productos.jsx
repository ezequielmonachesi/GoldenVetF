import { Container, Row } from "react-bootstrap";
import CardProducto from "./Producto/CardProducto";
import { obtenerProductos } from "../helpers/queries";
import { useState, useEffect } from "react";


const Productos = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    obtenerProductos().then((respuesta) => {
      if (respuesta) {
        setProductos(respuesta);
      }
    });
  }, []);
  return (
    <Container className="mt-3">
      <h1 className="text-center texto-productos fw-bold mt-1">
        Nuestros Productos
      </h1>
      <hr />
      <Row>
        {productos.map((producto) => (
          <CardProducto key={producto.id} />
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
