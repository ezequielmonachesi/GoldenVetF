import { Container } from "react-bootstrap";
import Planes from "../shared/Inicio/Planes";

const PlanesVista = () => {
    return (
        <Container className="my-5">
            <div className="bg-light rounded shadow p-sm-2 p-md-5">
                <h1 className="text-center">Planes</h1>
                <hr />
                <p className="text-center plan-description">En Golden Vet nos apasiona brindar el mejor cuidado y atención a tus adorables compañeros peludos en cada etapa de sus vidas. Sabemos que cada animal es único y merece un servicio personalizado que se adapte perfectamente a sus necesidades específicas. Por esta razón, hemos diseñado una exclusiva sección de planes de salud que se ajustan según la edad de tu querido amigo.</p>
            </div>
            <Planes />
        </Container>
    );
};

export default PlanesVista;