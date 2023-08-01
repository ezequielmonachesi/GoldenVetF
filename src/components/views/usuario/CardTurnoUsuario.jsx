import { Button, Card } from 'react-bootstrap';

const CardTurnoUsuario = () => {
    return (
        <Card className='my-3'>
            <Card.Header as="h5">Viernes 27, 17:30hs</Card.Header>
            <Card.Body>
                <Card.Title>Marley</Card.Title>
                <Card.Text>
                    Esta con perdida de apetito y vomitos
                </Card.Text>
                <Button variant="danger">Eliminar turno</Button>
            </Card.Body>
        </Card>
    );
};

export default CardTurnoUsuario;