import { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import FormularioEditarMascota from "./FormularioEditarMascota";

const MascotaEditarPaciente = ({ paciente, mascota }) => {
    const [modalShowEditarMascota, setModalShowEditarMascota] = useState(false);

    function ModalAgregarMascota(props) {
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>Agregar mascota</Modal.Header>
            <Modal.Body>
              <FormularioEditarMascota paciente={paciente} mascota={mascota}></FormularioEditarMascota>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={props.onHide}>
                Salir
              </Button>
            </Modal.Footer>
          </Modal>
        );
      }

    return (
        <>
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
                    <Button onClick={() => setModalShowEditarMascota(true)} className="m-2" variant="success">Editar</Button>
                    <Button variant="danger">borrar</Button>
                </Card.Body>
            </Card>
            <ModalAgregarMascota show={modalShowEditarMascota} onHide={() => setModalShowEditarMascota(false)} />
        </>
    );
};

export default MascotaEditarPaciente;