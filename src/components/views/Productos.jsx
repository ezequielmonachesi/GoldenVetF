import React from "react";
import { Container, Row } from "react-bootstrap";
import CardProducto from "./Producto/CardProducto";
import {obtenerProductos} from '../helpers/queries'

const Productos = () => {
  obtenerProductos()
  return (
    <Container className="mt-3">
      <h1 className="text-center texto-productos fw-bold mt-1">
        Nuestros Productos
      </h1>
      <hr />
      <Row>
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
        <CardProducto />
      </Row>
    </Container>
  );
};

export default Productos;
