import { useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";
import FormularioEditarMascota from "./FormularioEditarMascota";
import { editarPaciente } from "../../../helpers/queriesPacientes";
import Swal from "sweetalert2";
import FormularioAgregarHistoriaMedica from "./FormularioAgregarHistoriaMedica";
import DetalleMascota from "../../usuario/DetalleMascota";

const MascotaEditarPaciente = ({ paciente, mascota, refetchData }) => {
  const [modalShowEditarMascota, setModalShowEditarMascota] = useState(false);
  const [modalShowAgregarHistoriaMedica, setModalShowAgregarHistoriaMedica] = useState(false);
  const [modalShowDetalleMascota, setModalShowDetalleMascota] = useState(false);

  function eliminarMascota(mascotaAEliminar) {
    const nuevasMascotas = paciente.mascotas.filter((mascotaActual) => mascotaActual.nombre !== mascotaAEliminar.nombre);
    paciente.mascotas = nuevasMascotas;
    editarPaciente(paciente, paciente.id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire('Mascota eliminada', `La mascota ${mascotaAEliminar.nombre} fue eliminada correctamente`, 'success');
        refetchData();
      } else {
        Swal.fire('Ocurrió un error', `La mascota ${mascotaAEliminar.nombre} no pudo ser eliminada, intente en unos minutos`, 'error');
      }
    })
  }

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
          <FormularioEditarMascota refetchData={refetchData} paciente={paciente} mascota={mascota}></FormularioEditarMascota>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalAgregarHistoriaMedica(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Agregar historia medica</Modal.Header>
        <Modal.Body>
          <FormularioAgregarHistoriaMedica refetchData={refetchData} paciente={paciente} mascota={mascota}></FormularioAgregarHistoriaMedica>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function ModalDetalleMascota(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>Detalle mascota</Modal.Header>
        <Modal.Body>
          <DetalleMascota mascota={mascota}></DetalleMascota>
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
          <Button onClick={() => setModalShowEditarMascota(true)}  variant="success">Editar</Button>
          <Button onClick={() => setModalShowAgregarHistoriaMedica(true)} className="mx-2 my-2" variant="success">Agregar historia</Button>
          <Button onClick={() => setModalShowDetalleMascota(true)} className="mx-md-2 me-2" variant="success">Detalle</Button>
          <Button onClick={() => eliminarMascota(mascota)}  variant="danger">borrar</Button>
        </Card.Body>
      </Card>
      <ModalAgregarMascota show={modalShowEditarMascota} onHide={() => setModalShowEditarMascota(false)} />
      <ModalAgregarHistoriaMedica show={modalShowAgregarHistoriaMedica} onHide={() => setModalShowAgregarHistoriaMedica(false)} />
      <ModalDetalleMascota show={modalShowDetalleMascota} onHide={() => setModalShowDetalleMascota(false)} />
    </>
  );
};

export default MascotaEditarPaciente;