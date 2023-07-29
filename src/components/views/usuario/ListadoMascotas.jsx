import { Button, Col, Row, Modal } from "react-bootstrap";
import CardMascotaUsuario from "./CardMascotaUsuario";
import FormularioNuevaMascota from "./FormularioNuevaMascota";
import { useState } from "react";

const ListadoMascotas = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <>
            <div className="bg-light border shadow rounded my-5 p-3">
                <h2 className="text-center mb-4">Tus mascotas</h2>
                <hr />
                <Row>
                    <Col sm={6}><CardMascotaUsuario /></Col>
                    <Col sm={6}><CardMascotaUsuario /></Col>
                    <Col sm={6}><CardMascotaUsuario /></Col>
                </Row>
                <Button variant="primary" onClick={handleShowModal}>Agregar Mascota</Button>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header className="card-header-bg" closeButton>
                    <Modal.Title>Agregar nueva mascota</Modal.Title>
                </Modal.Header>
                <Modal.Body><FormularioNuevaMascota/></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>


    );
};

export default ListadoMascotas;