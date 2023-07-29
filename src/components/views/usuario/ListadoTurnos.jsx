import { Button, Modal, Row } from "react-bootstrap";
import CardTurnoUsuario from "./CardTurnoUsuario";
import { useState } from "react";
import FormularioTurno from "./FormularioTurno";

const ListadoTurnos = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <>
            <div className="bg-light border shadow rounded my-5 p-3">
                <h2 className="text-center mb-4">Tus turnos</h2>
                <hr />
                <Row>
                    <CardTurnoUsuario/>
                    <CardTurnoUsuario/>
                    <CardTurnoUsuario/>
                </Row>
                <Button variant="primary" onClick={handleShowModal}>Solicitar Turno</Button>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header className="card-header-bg" closeButton>
                    <Modal.Title>Solicitar turno</Modal.Title>
                </Modal.Header>
                <Modal.Body><FormularioTurno/></Modal.Body>
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

export default ListadoTurnos;