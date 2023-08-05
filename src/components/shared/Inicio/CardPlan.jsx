import { Card, Col, Button } from 'react-bootstrap';
import './planes.css'
import { Link } from 'react-router-dom';
import CarouselPlanImg from '../../views/detallePlan/CarouselPlanImg';

const CardPlan = ({id, nombrePlan, rangoEdad, descripcion, serviciosPlan, imagenes}) => {

    return (
        <>
            <Col md={4} ld={3} className="mb-3">
                <Card className='bg-light shadow'>
                    <CarouselPlanImg imagenes={imagenes} />
                    <Card.Body>
                        <Card.Title>{nombrePlan}</Card.Title>
                        <p className='plan-description'>{rangoEdad}</p>
                        <Button as={Link} to={"/planes/"+id} className='bg-boton-planes btn'>Ver mas</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default CardPlan;