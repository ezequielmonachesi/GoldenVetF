import React, { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import './servicios.css'

const CardPlan = ({nombrePlan, rangoEdad, descripcion, serviciosPlan, imagenes}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const listado = serviciosPlan.map(servicio=><li>{servicio}</li>);
    
    return (
        <>
        <Col md={4} ld={3} className="mb-3">
            <Card className='bg-card-servicio'>
                <Card.Img src={imagenes[1]} placeholder={nombrePlan}/>
                <Card.Body>
                    <Card.Title>{nombrePlan}</Card.Title>
                    <p>rango de edad: {rangoEdad}</p>
                    <button className='bg-boton-servicio btn' onClick={handleShow}>Ver mas</button>
                </Card.Body>
            </Card>
        </Col>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{nombrePlan}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <article>
                    <img src={imagenes[1]} alt={nombrePlan} className='img-fluid'/>
                </article>
                <article>
                    {descripcion}
                </article>
                <article>
                    <h3>Servicios que les ofrecemos</h3>
                    <ul>
                        {listado}
                    </ul>
                </article>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Solicitar
                </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
};

export default CardPlan;