import { Button, Card, Col, Row } from "react-bootstrap";

const MascotaEditarPaciente = ({ mascota }) => {
    return (
        <Card className="my-3">
            <Card.Header><Card.Title>{mascota.nombre}</Card.Title></Card.Header>
            <Card.Body>
                <Row>
                    <Col xs={8}>
                        <Card.Text>
                            Especie: {mascota.especie}
                        </Card.Text>
                        <Card.Text>
                            Raza: {mascota.raza}
                        </Card.Text>
                    </Col>
                    <Col xs={4}>
                        <img className="img-fluid" src={mascota.imagen} alt={mascota.nombre} />
                    </Col>
                </Row>
                <Button variant="success">Editar</Button>
                <Button variant="danger">borrar</Button>
            </Card.Body>
        </Card>
    );
};

export default MascotaEditarPaciente;