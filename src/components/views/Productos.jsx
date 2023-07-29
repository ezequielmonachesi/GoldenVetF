import { Container, Row } from "react-bootstrap";
import CardProducto from "./Producto/CardProducto";
import { useState, useEffect } from "react";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  return (
    <Container className="mt-3">
      <h1 className="text-center texto-productos fw-bold mt-1">
        Nuestros Productos
      </h1>
      <hr />
      <Row>
        {productos.length > 0 ? (
          productos.map((producto) => (
            <CardProducto producto={producto} key={producto.id} />
          ))
        ) : (
          <h2>Hubo un error al cargar los productos</h2>
        )}
      </Row>
    </Container>
  );
};

export default Productos;
