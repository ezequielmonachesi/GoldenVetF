import { Button, Col, Row, Modal, Spinner } from "react-bootstrap";
import CardMascotaUsuario from "./CardMascotaUsuario";
import FormularioNuevaMascota from "./FormularioNuevaMascota";
import { useEffect, useState } from "react";
import { obtenerUsuario } from "../../helpers/queriesUsuarios";

const ListadoMascotas = () => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario"));
    const id = usuarioLogueado?.id;
    const [usuario, setUsuario] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [listadoMascotas, setListadoMascotas] = useState([])

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    useEffect(() => {
        const obtenerDatosUsuario = async () => {
            try {
                const usuario = await obtenerUsuario(id);
                setUsuario(usuario);
            } catch (error) {
                // setError('Error al obtener el usuario.');
            }
        };

        obtenerDatosUsuario();
    }, [id]);

    useEffect(() => {
        const mascotas = usuario?.paciente?.mascotas;

        setListadoMascotas(mascotas?.map((mascota) => (
            <CardMascotaUsuario
                nombre={mascota.nombre}
                especie={mascota.veterinario}
                raza={mascota.raza}
                historialMedico={mascota.historialMedico}
                key={mascota.nombre}
            />
        )));
    }, [usuario])

    const showComponent = () => {
        // if (isLoading) {
        //     return (
        //         <div className="my-5">
        //             <Spinner animation="border" variant="primary" />
        //         </div>
        //     );
        // }

        // if (!isLoading && listado?.length <= 0) {
        //     return (
        //         <h3 className="text-danger border p-3">
        //             Hubo un error al cargar las mascotas
        //         </h3>
        //     );
        // }

        return listadoMascotas;
    };


    return (
        <>
            <div className="bg-light border shadow rounded my-5 p-3">
                <h2 className="text-center mb-4">Tus mascotas</h2>
                <hr />
                <Row>
                    {showComponent()}
                </Row>
                <Button variant="primary" onClick={handleShowModal}>Agregar Mascota</Button>
            </div>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header className="card-header-bg" closeButton>
                    <Modal.Title>Agregar nueva mascota</Modal.Title>
                </Modal.Header>
                <Modal.Body><FormularioNuevaMascota /></Modal.Body>
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