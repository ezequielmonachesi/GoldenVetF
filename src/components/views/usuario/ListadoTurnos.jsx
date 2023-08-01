import { Button, Modal, Row, Spinner } from "react-bootstrap";
import CardTurnoUsuario from "./CardTurnoUsuario";
import { useState } from "react";
import FormularioTurno from "./FormularioTurno";
import { useFetchData } from "../../hooks/useFetchData";

const ListadoTurnos = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const { data, isLoading, error } = useFetchData("turnos");

    const listado = data?.map((turno) => (
        <CardTurnoUsuario
          paciente={turno.nombreServicio}
          veterinario={turno.veterinario}
          fechaYhora={turno.fechaYhora}
          key={turno.id}
        />
    ));

    const showComponent = () => {
        if (isLoading) {
            return (
                <div className="my-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            );
        }

        if (!isLoading && listado?.length <= 0) {
            return (
                <h3 className="text-danger border p-3">
                    Hubo un error al cargar los servicios
                </h3>
            );
        }

        return listado;
    };

    return (
        <>
            <div className="bg-light border shadow rounded my-5 p-3">
                <h2 className="text-center mb-4">Tus turnos</h2>
                <hr />
                <Row>
                    {showComponent()}
                </Row>
                <Button variant="primary" onClick={handleShowModal}>Solicitar Turno</Button>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header className="card-header-bg" closeButton>
                    <Modal.Title>Solicitar turno</Modal.Title>
                </Modal.Header>
                <Modal.Body><FormularioTurno /></Modal.Body>
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