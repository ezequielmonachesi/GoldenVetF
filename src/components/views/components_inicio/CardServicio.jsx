import React from 'react';
import { Card, Col } from 'react-bootstrap';

const CardServicio = ({id, nombreServicio, imagen}) => {
    return (
        <Col md={4} ld={3} className="mb-3">
            <Card className='bg-card-servicio'>
                <Card.Img src={imagen} placeholder={nombreServicio}/>
                <Card.Body>
                    <Card.Title>{nombreServicio}</Card.Title>
                    <button className='bg-boton-servicio btn'>Ver mas</button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardServicio;