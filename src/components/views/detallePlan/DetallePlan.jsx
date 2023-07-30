import { Col, Container, Row } from 'react-bootstrap';
import "./style.css";
import CarouselPlanImg from './CarouselPlanImg';

const DetallePlan = () => {
    return (
        <Container className='mainSection p-sm-2 p-md-5 my-5 bg-light rounded shadow'>
            <h1 className='text-center display-4'>Primeros pasos</h1>
            <hr />
            <div className='my-5'>
                <p className='plan-description'>Este plan está diseñado para atender a las mascotas en sus etapas más jóvenes, desde el nacimiento hasta los 5 años de edad. Sabemos lo importante que es brindarles un cuidado óptimo durante su desarrollo temprano para asegurar una vida saludable y feliz</p>
                <Row className='my-5'>
                    <Col lg={6}>
                        <CarouselPlanImg />
                    </Col>
                    <Col lg={6}>
                        <h3 className='text-center mb-3'>Este plan cuenta con los siguientes servicios:</h3>
                        <ul>
                            <li className='plan-description'>Vacunación y desparasitación: Mantenemos al día las vacunas y tratamientos contra parásitos para proteger a tu mascota contra enfermedades comunes.</li>
                            <li className='plan-description'>Vacunación y desparasitación: Mantenemos al día las vacunas y tratamientos contra parásitos para proteger a tu mascota contra enfermedades comunes.</li>
                            <li className='plan-description'>Vacunación y desparasitación: Mantenemos al día las vacunas y tratamientos contra parásitos para proteger a tu mascota contra enfermedades comunes.</li>
                            <li className='plan-description'>Vacunación y desparasitación: Mantenemos al día las vacunas y tratamientos contra parásitos para proteger a tu mascota contra enfermedades comunes.</li>
                        </ul>
                    </Col>
                </Row>
                <hr className='mb-5' />
                <p className='plan-description'>Debido a que nuestra filosofía dicta que cada mascota debe tener una atención personalizada, preferimos proporcionar un servicio de calidad que esté plenamente ajustado a las características individuales de cada mascota. Así, garantizamos que recibirán la atención adecuada y los cuidados que merecen.</p>
                <p className='plan-description'>Para contratar un plan te invitamos a acercarte a nuestra veterinaria para descubrir cómo podemos brindarle a tu amado amigo una vida plena y saludable. ¡Esperamos ansiosamente conocerte a ti y a tu peludo compañero!</p>
            </div>
        </Container>
    );
};

export default DetallePlan;