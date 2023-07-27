import React from 'react';
import { Container, Row } from 'react-bootstrap';
import CardProducto from './Producto/CardProducto';

const Productos = () => {
    return (
       <Container className='mt-3'>
        <Row>
            <CardProducto/>
            <CardProducto/>
            <CardProducto/>
        </Row>
       </Container>
    );
};

export default Productos;