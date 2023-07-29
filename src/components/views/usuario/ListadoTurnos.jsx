import { Button, Row } from "react-bootstrap";
import CardTurnoUsuario from "./CardTurnoUsuario";

const ListadoTurnos = () => {
    return (
        <div className="bg-light border shadow rounded my-5 p-3">
            <h2 className="text-center mb-4">Tus turnos</h2>
            <hr />
            <Row>
                <CardTurnoUsuario/>
                <CardTurnoUsuario/>
                <CardTurnoUsuario/>
            </Row>
            <Button variant="primary">Solicitar Turno</Button>
        </div>
    );
};

export default ListadoTurnos;