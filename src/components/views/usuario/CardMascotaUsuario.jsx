import { useState } from 'react';
import { Button, Card, Col, Modal } from 'react-bootstrap';
import DetalleMascota from './DetalleMascota';

const CardMascotaUsuario = ({ mascota }) => {

    const [modalShowDetalleMascota, setModalShowDetalleMascota] = useState(false);

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
            <Col sm={6}>
                <Card className='my-3 h-100'>
                    <Card.Img className='img-fluid' variant="top" src={mascota.imagen} />
                    <Card.Body>
                        <Card.Title>{mascota.nombre}</Card.Title>
                        <ul>
                            <li>Especie: {mascota.especie}</li>
                            <li>Raza: {mascota.raza}</li>
                        </ul>
                        <Button onClick={() => setModalShowDetalleMascota(true)} variant="success">Ver mas</Button>
                    </Card.Body>
                </Card>
            </Col>
            <ModalDetalleMascota show={modalShowDetalleMascota} onHide={() => setModalShowDetalleMascota(false)} />
        </>
    );
};

export default CardMascotaUsuario;