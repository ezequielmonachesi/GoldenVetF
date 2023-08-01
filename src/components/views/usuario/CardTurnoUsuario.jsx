import { Button, Card } from 'react-bootstrap';

const CardTurnoUsuario = ({paciente, veterinario, fechaYHora, detalleVisita}) => {
    return (
        <Card className='my-3'>
            <Card.Header as="h5">{fechaYHora}</Card.Header>
            <Card.Body>
                <Card.Title>{paciente}</Card.Title>
                <Card.Text>
                    {detalleVisita}
                    {veterinario}
                </Card.Text>
                <Button variant="danger">Eliminar turno</Button>
            </Card.Body>
        </Card>
    );
};

export default CardTurnoUsuario;