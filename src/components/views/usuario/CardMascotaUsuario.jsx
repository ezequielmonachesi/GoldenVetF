import { Button, Card, Col } from 'react-bootstrap';

const CardMascotaUsuario = ({nombre, especie, raza, historialMedico, imagen}) => {
    return (
        <Col sm={6}>
            <Card className='my-3 h-100'>
                <Card.Img className='img-fluid' variant="top" src={imagen} />
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