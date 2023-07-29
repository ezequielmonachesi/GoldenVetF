import { Button, Col, Row } from "react-bootstrap";
import CardMascotaUsuario from "./CardMascotaUsuario";

const ListadoMascotas = () => {
    return (
        <div className="bg-light border shadow rounded my-5 p-3">
            <h2 className="text-center mb-4">Tus mascotas</h2>
            <hr />
            <Row>
                <Col sm={6}><CardMascotaUsuario/></Col>
                <Col sm={6}><CardMascotaUsuario/></Col>
                <Col sm={6}><CardMascotaUsuario/></Col>
            </Row>
            <Button variant="primary">Agregar Mascota</Button>
        </div>
    );
};

export default ListadoMascotas;