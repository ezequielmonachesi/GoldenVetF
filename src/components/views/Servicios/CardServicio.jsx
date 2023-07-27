import React, { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import './Servicios.css'
const CardServicio = ({descripcion, nombreServicio, imagen}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Col md={4} ld={3} className="mb-3">
            <Card className='bg-card-servicio'     onMouseEnter={handleShow} /* Agrega el evento onMouseEnter para mostrar el elemento */
    onMouseLeave={handleClose} /* Agrega el evento onMouseLeave para ocultar el elemento */
  >
                <Card.Img src={imagen} placeholder={nombreServicio}/>
                <Card.Body>
                    <Card.Title>{nombreServicio}</Card.Title>                    
                    <div className={`description ${show ? 'active' : ''}`}>  
                    {descripcion}
                    </div>                
                </Card.Body>
            </Card>
        </Col>

        </>
    );
};

export default CardServicio;