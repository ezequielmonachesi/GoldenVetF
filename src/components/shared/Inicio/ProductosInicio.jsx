import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useFetchData } from '../../hooks/useFetchData';
import CardProducto from '../../views/Producto/CardProducto';
import { ArrowRight } from 'react-bootstrap-icons';

const ProductosInicio = () => {
    const {data} = useFetchData('productos')
    const productos =  data.map(producto=><CardProducto producto={producto} key={producto.id}/>)
    return (
        <Container className='shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='d-flex justify-content-between'>
                <h4>Ofertas</h4>
                <Link to={'/productos'} className='boton-verMas-productoInicio'>Ver más <ArrowRight/></Link>
            </div>
            <Row>
               {productos.slice(0,4)}
            </Row>
        </Container>
    );
};

export default ProductosInicio;