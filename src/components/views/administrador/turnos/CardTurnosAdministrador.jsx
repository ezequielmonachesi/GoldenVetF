import { Col, Card, Button,Modal,Form } from "react-bootstrap";
import { useState } from "react";
import {useForm} from 'react-hook-form'

const CardTurnosAdministrador = ({turno}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const {
    register,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm();

  const ModalEditarTurno = () => {
    return (
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Editar Turno</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="nombrePaciente">
                <Form.Label>Nombre del Paciente</Form.Label>
                <Form.Control type="text" placeholder="Nombre" />
              </Form.Group>
              <Form.Group controlId="veterinario">
                <Form.Label>Veterinario</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="fechaHora">
                <Form.Label>Fecha y Hora</Form.Label>
                <Form.Control type="datetime-local" />
              </Form.Group>
              <Form.Group controlId="detalleVisita">
                <Form.Label>Detalle de la Visita</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cerrar
                </Button>
                <Button variant="primary" type="submit">
                  Guardar
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  return (
    <>
      <Col xs={12} md={6} lg={3}>
        <Card style={{ width: "18rem",marginTop:"15px" }}>
          <Card.Body>
            <div className="d-flex justify-content-around">
              <Card.Title>{turno.paciente}</Card.Title>
              <Card.Title>{turno.fechaYHora}</Card.Title>
            </div>
            <Card.Text>
             {turno.detalleVisita}
            </Card.Text>
            <div className="d-flex justify-content-around">
              <Button variant="primary" onClick={handleShow}>
                Editar Turno
              </Button>
              <Button href="#" variant="danger">
                Borrar turno
              </Button>
            </div>
          </Card.Body>
        </Card>
      </Col>
      <ModalEditarTurno />
    </>
  );
};

export default CardTurnosAdministrador;
