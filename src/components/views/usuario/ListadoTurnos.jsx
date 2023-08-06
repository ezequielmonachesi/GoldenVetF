import { Button, Modal, Row, Spinner } from "react-bootstrap";
import CardTurnoUsuario from "./CardTurnoUsuario";
import { useState } from "react";
import FormularioTurno from "./FormularioTurno";
import { useFetchData } from "../../hooks/useFetchData";

const ListadoTurnos = () => {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    const { data, isLoading, error, refetchData } = useFetchData("turnos");

    const currentDate = new Date();
    const listado = data
        ?.filter((turno) => new Date(turno.fechaYHora) >= currentDate)
        .map((turno) => (
            <CardTurnoUsuario
                paciente={turno.paciente}
                veterinario={turno.veterinario}
                fechaYHora={turno.fechaYHora}
                detalleVisita={turno.detalleVisita}
                id={turno.id}
                key={turno.id}
                refetchData={refetchData}
            />
        ));

    const showComponent = () => {
        if (isLoading) {
            return (
                <div className="my-5 text-center">
                    <Spinner animation="border" variant="primary" />
                </div>
            );
        }

        if (!isLoading && listado?.length <= 0) {
            return (
                <h3 className="text-danger border p-3">
                    No tienes turnos registrados
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
                <Modal.Body><FormularioTurno refetchData={refetchData} /></Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleCloseModal}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default ListadoTurnos;