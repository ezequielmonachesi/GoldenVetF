import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const CardServicio = () => {
    return (
        <Col md={4} ld={3} className="mb-3">
            <Card className='bg-card-servicio'>
                <Card.Img src='https://media.gettyimages.com/id/1312146776/es/vector/emblema-del-salón-de-mascotas.jpg?s=612x612&w=gi&k=20&c=3SwiNDWBomwQTEWoqMFA-_bA6MWztGiYFIzQ8nm0f6o='/>
                <Card.Body>
                    <Card.Title>Peluqueria canina</Card.Title>
                    <Button className='bg-boton-servicio'>Ver mas</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardServicio;