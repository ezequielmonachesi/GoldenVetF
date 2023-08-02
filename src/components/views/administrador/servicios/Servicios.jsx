import {useState } from "react";
import {
  borrarServicio,  
} from "../../../helpers/queriesServicios";
import Swal from "sweetalert2";
import { Button, Table, Modal, Spinner } from "react-bootstrap";
import "./servicios.css";
import CrearServicio from "../servicios/CrearServicio";
import EditarServicio from "./EditarServicio";
import { useFetchData } from "../../../hooks/useFetchData";

const Servicios = () => {
  const {data, isLoading,refetchData } = useFetchData('servicios');
  const [modalShow, setModalShow] = useState(false);
  const [modalShowEditar, setModalShowEditar] = useState(false);
  const [id, setId] = useState(null);

  const handleBorrarServicio = (servicio) => {
    borrarServicio(servicio.id).then((respuesta) => {
      Swal.fire({
        title: "Esta seguro?",
        text: "No podrás ser capaz de revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, borralo!",
      }).then((result) => {
        if (result.isConfirmed) {
          if (respuesta && respuesta.status === 200) {
            Swal.fire(
              "Servicio eliminado",
              `El servicio ${servicio.nombreServicio} fue eliminado correctamente`,
              "success"
            );
                actualizarServicios();
          } else {
            Swal.fire(
              "A ocurrido un error",
              `El servicio ${servicio.nombreServicio} no pudo ser eliminado`,
              "error"
            );
          }
        }
      });
    });
  };

   const actualizarServicios = async () => {
    await refetchData();
  };


  const handleEditarServicio = (id) => {
    setId(id);
    setModalShowEditar(true);
  };



  return (
    <>
      <div className="container p-3 d-flex justify-content-end">
        <Button
          variant="success"
          className="boton-crearServicio"
          onClick={() => setModalShow(true)}
        >
          Crear Servicio
        </Button>
      </div>
      <VentanaModalCrearServicio
        className='modal-crud'
        show={modalShow}
        onHide={() => {
            setModalShow(false)
        }}
        actualizarServicios={actualizarServicios}
      ></VentanaModalCrearServicio>
      ;
      {id && (
        <VentanaModalEditarServicio
          className='modal-crud'
          show={modalShowEditar}
          onHide={() => setModalShowEditar(false)}
          id={id}
          actualizarServicios={actualizarServicios}
        />
      )}

    {isLoading ? (
            <div className="d-flex justify-content-center">
            <Spinner size="lg" variant="primary" />
            </div>
          ) :

      <Table responsive striped>
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre Servicio</th>
            <th>Administrar</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.map((servicio) => (
              <tr key={servicio.id}>
                <td>{servicio.id}</td>
                <td>{servicio.nombreServicio}</td>
                <td>
                  <Button
                    onClick={() => handleEditarServicio(servicio.id)}
                    variant="warning"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => handleBorrarServicio(servicio)}
                    variant="danger"
                  >
                    Borrar
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
}
    </>
  );
};

function VentanaModalCrearServicio(props) {
    const { actualizarServicios, ...restProps } = props;
  return (
    <Modal{...restProps} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <CrearServicio actualizarServicios={actualizarServicios} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Salir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
function VentanaModalEditarServicio(props) {
    const { actualizarServicios, ...restProps } = props;
  return (
    <Modal {...restProps} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <EditarServicio id={props.id} actualizarServicios={actualizarServicios}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Salir
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Servicios;
