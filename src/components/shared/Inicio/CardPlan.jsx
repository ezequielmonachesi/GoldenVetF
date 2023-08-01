import { Card, Col, Button } from 'react-bootstrap';
import './planes.css'
import { Link } from 'react-router-dom';

const CardPlan = ({id, nombrePlan, rangoEdad, descripcion, serviciosPlan, imagenes}) => {

    return (
        <>
            <Col md={4} ld={3} className="mb-3">
                <Card className='bg-card-planes'>
                    <Card.Img src={imagenes[1]} placeholder={nombrePlan}/>
                    <Card.Body>
                        <Card.Title>{nombrePlan}</Card.Title>
                        <p>rango de edad: {rangoEdad}</p>
                        <Button as={Link} to={"/planes/"+id} className='bg-boton-planes btn'>Ver mas</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardPlan;