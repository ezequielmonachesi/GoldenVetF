import { Button, Row, Modal, Spinner, Col } from "react-bootstrap";
import CardMascotaUsuario from "./CardMascotaUsuario";
import FormularioNuevaMascota from "./FormularioNuevaMascota";
import { useEffect, useState } from "react";
import { useFetchDataById } from "../../hooks/useFetchDataById";

const ListadoMascotas = ({ usuarioLogueado }) => {
  const [showModal, setShowModal] = useState(false);
  const [listadoMascotas, setListadoMascotas] = useState([]);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const { data, isLoading, error, refetchData } = useFetchDataById(
    "usuarios",
    usuarioLogueado.id
  );

  useEffect(() => {
    const mascotas = data?.paciente?.mascotas;

    setListadoMascotas(
      mascotas?.map((mascota) => (
        <CardMascotaUsuario
          mascota={mascota}
          key={mascota.nombre}
        />
      ))
    );
  }, [data]);

  const showComponent = () => {
    if (isLoading && listadoMascotas?.length == 0) {
      return (
        <div className="my-5 text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      );
    }

    if (!isLoading && listadoMascotas?.length <= 0) {
      return (
        <h3 className="text-danger border p-3 text-center">
          Aún no tienes mascotas registradas
        </h3>
      );
    }

    return listadoMascotas;
  };

  const handleFormSubmit = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-light border shadow rounded my-5 p-3">
        <h2 className="text-center mb-4">Tus mascotas</h2>
        <hr />
        <Row className="gy-5">{showComponent()}</Row>
        <Button className="mt-5" variant="primary" onClick={handleShowModal}>
          Agregar Mascota
        </Button>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header className="card-header-bg" closeButton>
          <Modal.Title>Agregar nueva mascota</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FormularioNuevaMascota
            dataPaciente={data.paciente}
            onFormSubmit={handleFormSubmit}
            refetchData={refetchData}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ListadoMascotas;
