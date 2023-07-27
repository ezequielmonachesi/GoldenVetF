import React, { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';

const CardServicio = ({descripcion, nombreServicio, imagen}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Col md={4} ld={3} className="mb-3">
            <Card className='bg-card-servicio'>
                <Card.Img src={imagen} placeholder={nombreServicio}/>
                <Card.Body>
                    <Card.Title>{nombreServicio}</Card.Title>
                    <button className='bg-boton-servicio btn' onClick={handleShow}>Ver mas</button>
                </Card.Body>
            </Card>
        </Col>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{nombreServicio}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={imagen} alt={nombreServicio} className='img-fluid'/>
                {descripcion}</Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Solicitar
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default CardServicio;