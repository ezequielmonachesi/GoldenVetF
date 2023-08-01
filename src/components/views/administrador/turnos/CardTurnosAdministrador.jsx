import { Col, Card, Button,Modal} from "react-bootstrap";
import { useState } from "react";
import FormularioEditarTurno from "./FormularioEditarTurno";

const CardTurnosAdministrador = ({turno}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ModalEditarTurno = ({turno}) => {
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
           <FormularioEditarTurno turno={turno} handleClose={handleClose}/>
          </Modal.Body>
        </Modal>
      </>
    );
  };
  return (
    <>
      <Col xs={12} md={6} lg={3}>
        <Card style={{ width: "19rem",marginTop:"15px" }}>
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
      <ModalEditarTurno turno={turno}/>
    </>
  );
};

export default CardTurnosAdministrador;
