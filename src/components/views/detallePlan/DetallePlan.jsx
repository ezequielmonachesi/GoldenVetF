import { Button, Col, Container, Row } from 'react-bootstrap';
import "./style.css";
import CarouselPlanImg from './CarouselPlanImg';
import { useParams } from 'react-router';
import { planData } from '../../shared/planes/planData';
import { Link } from 'react-router-dom';


const DetallePlan = () => {
    const { id } = useParams();

    const planEncontrado = planData.find((plan) => plan.id === id);

    const mostrarPlan = () => {
        if (planEncontrado) {
            return (
                <>
                    <h1 className='text-center display-4'>{planEncontrado.nombrePlan}</h1>
                    <hr />
                    <div className='my-5'>
                        <p className='plan-description'>{planEncontrado.descripcion}</p>
                        <Row className='my-5'>
                            <Col lg={6}>
                                <CarouselPlanImg imagenes={planEncontrado.imagenes} />
                            </Col>
                            <Col lg={6}>
                                <h3 className='text-center mb-3'>Este plan cuenta con los siguientes servicios:</h3>
                                <ul>
                                    {planEncontrado.serviciosPlan.map(servicio => (
                                        <li className='plan-description' key={servicio}>{servicio}</li>
                                    ))}
                                </ul>
                            </Col>
                        </Row>
                        <hr className='mb-5' />
                        <p className='plan-description'>Debido a que nuestra filosofía dicta que cada mascota debe tener una atención personalizada, preferimos proporcionar un servicio de calidad que esté plenamente ajustado a las características individuales de cada mascota. Así, garantizamos que recibirán la atención adecuada y los cuidados que merecen.</p>
                        <p className='plan-description'>Para contratar un plan te invitamos a acercarte a nuestra veterinaria para descubrir cómo podemos brindarle a tu amado amigo una vida plena y saludable. ¡Esperamos ansiosamente conocerte a ti y a tu peludo compañero!</p>
                        <p className='plan-description'>Podés acercarte a nuestra veterinaria, también contactarnos a través de nuestro <Link to={'/contacto'}>formulario de contacto</Link>  o solicitar un turno desde <Link to={'/usuario'}>aquí</Link>.</p>
                    </div>
                </>
            )

        } else {
            return (
                <>
                    <div>
                        <h1 className='text-center display-4'>Hubo un error al cargar el plan</h1>
                    </div>
                    <hr />
                    <div>
                        <Button as={Link} to={"/planes"}>Mejor regresar atras</Button>
                    </div>
                </>
            )
        }
    }

        return (
            <Container className='mainSection p-sm-2 p-md-5 my-5 bg-light rounded shadow'>
                {mostrarPlan()}
            </Container>
        );
    };

export default DetallePlan;