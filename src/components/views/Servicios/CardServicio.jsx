import { useState } from 'react';
import { Card, Col, Button, Modal } from 'react-bootstrap';
import './Servicios.css'
import { Link } from 'react-router-dom';
const CardServicio = ({descripcion, nombreServicio, imagen,id}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <Col md={4} ld={3} as={Link} to={"/servicios/"+id} className="mb-3 position-relative col-servicios">
            <Card className='bg-card-servicio'     onMouseEnter={handleShow} /* Agrega el evento onMouseEnter para mostrar el elemento */
    onMouseLeave={handleClose} /* Agrega el evento onMouseLeave para ocultar el elemento */
  >
                <Card.Img className='imagen-card-servicio' src={imagen} placeholder={nombreServicio}/>
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