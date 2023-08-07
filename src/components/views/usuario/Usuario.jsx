import { Col, Container, Row, Spinner } from "react-bootstrap";
import ListadoMascotas from "./ListadoMascotas";
import ListadoTurnos from "./ListadoTurnos";
import FormularioNuevoUsuario from "./FormulariuoNuevoUsuario";
import { useFetchDataById } from "../../hooks/useFetchDataById";
import { useParams } from "react-router-dom";

const Usuario = ({usuarioLogueado}) => {
    const {id} = useParams()

    const { data, isLoading, error, refetchData } = useFetchDataById("usuarios", id);

    const showComponent = () => {

        if (isLoading) {
            return (
                <div className="my-5 text-center">
                    <Spinner animation="border" variant="primary" />
                </div>
            );
        }

        if (!data.paciente && !isLoading) {
            return (
                <div className="my-5">
                    <h2 className="text-center display-5 mb-4">Antes de comenzar</h2>
                    <hr />
                    <p className="plan-description text-center">Para tu mejor atención, antes de comenzar a gestionar tus mascotas, necesitamos tus datos de contacto</p>
                    <FormularioNuevoUsuario idUsuario={id}/>
                </div>
            );
        } else {
            return (
                <>
                    <h1 className="text-center display-5 mb-4">Bienvenido a tu panel de administración</h1>
                    <hr />
                    <Row>
                        <Col sm={8}><ListadoMascotas usuarioLogueado={usuarioLogueado}/></Col>
                        <Col sm={4}><ListadoTurnos/></Col>
                    </Row>
                </>
            );
        }
    };

    return (
        <Container className="bg-light border shadow rounded my-5 p-md-2 p-xl-5">
            {showComponent()}
        </Container>
    );
};

export default Usuario;