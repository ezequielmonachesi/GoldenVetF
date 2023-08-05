import { Button, Card } from 'react-bootstrap';
import imagenPerro from '../../../assets/plan-madurando-1.jpg';

const CardMascotaUsuario = () => {
    return (
        <Card className='my-3'>
            <Card.Img className='img-fluid' variant="top" src={imagenPerro} />
            <Card.Body>
                <Card.Title>Marley</Card.Title>
                    <ul>
                        <li>Especie: Perro</li>
                        <li>Raza: Labrador</li>
                    </ul>
                <Button variant="success">Ver mas</Button>
            </Card.Body>
        </Card>
    );
};

export default CardMascotaUsuario;