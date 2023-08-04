import { Button, Card, Col } from 'react-bootstrap';
import imagenPerro from '../../../assets/plan-madurando-1.jpg';

const CardMascotaUsuario = ({nombre, especie, raza, historialMedico}) => {
    return (
        <Col sm={6}>
            <Card className='my-3'>
                <Card.Img className='img-fluid' variant="top" src={imagenPerro} />
                <Card.Body>
                    <Card.Title>{nombre}</Card.Title>
                        <ul>
                            <li>Especie: {especie}</li>
                            <li>Raza: {raza}</li>
                        </ul>
                    <Button variant="success">Ver mas</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default CardMascotaUsuario;