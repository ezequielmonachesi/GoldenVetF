import { Button, Col, Container, Row } from "react-bootstrap";
import error404Img from "../../assets/error404.jpg";
import "./error404.css";

const Error404 = () => {
    return (
        <Container className="error-404 bg-light rounded my-5">
            <Row className="my-5 justify-content-center align-items-center p-5 bg-light">
                <Col sm={6} className="text-center">
                    <h1 className="error-title mb-4 text-danger bold">Error 404</h1>
                    <h2>Nuestros cachorros se llevaron esta página. Estamos trabajando en traerla de vuelta pronto.</h2>
                    <div>
                        <Button to="/" className="btn btn-danger my-3">Volver al inicio</Button>
                    </div>
                </Col>
                <Col sm={6}>
                    <img className="img-fluid" src={error404Img} alt="" />
                </Col>
            </Row>
        </Container>
    );
};

export default Error404;