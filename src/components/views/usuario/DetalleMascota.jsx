import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const DetalleMascota = ({ mascota }) => {

    const [listadoHistorialMedico, setListadoHistorialMedico] = useState([]);

    useEffect(() => {
        setListadoHistorialMedico(mascota.historialMedico)
    }, [mascota]);

    const formatoFecha = (fecha) => {
        const options = {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour12: false,
        }
        return new Date(fecha).toLocaleString(undefined, options);
    }

    function CardHistorialMedico({ historial }) {
        return (<Card className="my-3">
            <Card.Header><Card.Title>{formatoFecha(historial.fecha)}</Card.Title></Card.Header>
            <Card.Body>
                <Card.Text>
                    {historial.registro}
                </Card.Text>
            </Card.Body>
        </Card>
        )
    }

    return (
        <Container className="p-sm-2 p-md-5 bg-light rounded shadow">
            <h1 className="text-center display-4">{mascota.nombre}</h1>
            <hr />
            <div className="">
                <Row className="my-5">
                    <Col lg={6}>
                        <img className="img-fluid mb-3" src={mascota.imagen} alt={mascota.nombre} />
                    </Col>
                    <Col lg={6}>
                        <h3 className="text-center mb-3">
                            Historial clinico:
                        </h3>
                        {listadoHistorialMedico.length === 0 ? (
                            <h2 className="text-center">No hay historial médico disponible.</h2>
                        ) : (
                            listadoHistorialMedico.map((historial) => {
                                return <CardHistorialMedico historial={historial} key={historial.id} />;
                            })
                        )}
                    </Col>
                </Row>
            </div>

        </Container>
    );
};

export default DetalleMascota;