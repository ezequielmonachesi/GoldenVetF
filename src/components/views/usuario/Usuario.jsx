import { Col, Container, Row } from "react-bootstrap";
import ListadoMascotas from "./ListadoMascotas";
import ListadoTurnos from "./ListadoTurnos";

const Usuario = () => {
    return (
        <Container className="bg-light border shadow rounded my-5">
            <h1 className="text-center display-5 mb-4">Bienvenido a tu panel de administración</h1>
            <hr />
            <Row>
                <Col sm={8}><ListadoMascotas/></Col>
                <Col sm={4}><ListadoTurnos/></Col>
            </Row>
        </Container>
    );
};

export default Usuario;