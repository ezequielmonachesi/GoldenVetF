import { Button, Card } from 'react-bootstrap';
import { borrarTurno } from '../../helpers/queriesTurnos';
import Swal from 'sweetalert2';

const CardTurnoUsuario = ({ paciente, veterinario, fechaYHora, detalleVisita, id }) => {
    const eliminarTurno = () => {
        borrarTurno(id).then((respuesta) => {
            if (respuesta && respuesta.status === 200) {
                Swal.fire(
                    "Turno eliminado",
                    `El turno fue eliminado correctamente`,
                    "success"
                );
            } else {
                Swal.fire(
                    "Ocurrió un error",
                    `El turno no pudo ser eliminado`,
                    "error"
                );
            }
        });
    };

    return (
        <Card className='my-3'>
            <Card.Header as="h5">{fechaYHora}</Card.Header>
            <Card.Body>
                <Card.Title>{paciente}</Card.Title>
                <Card.Text>
                    {detalleVisita}
                    {veterinario}
                </Card.Text>
                <Button variant="danger" onClick={eliminarTurno}>Eliminar turno</Button>
            </Card.Body>
        </Card>
    );
};

export default CardTurnoUsuario;