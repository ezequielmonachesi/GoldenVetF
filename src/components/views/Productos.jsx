import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardProducto from './Producto/CardProducto';

const Productos = () => {
    return (
       <Container>
        <Row>
            <CardProducto/>
            <CardProducto/>
            <CardProducto/>
        </Row>
       </Container>
    );
};

export default Productos;