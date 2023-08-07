import { Form, Button, Row, Col, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearPaciente } from "../../../helpers/queriesPacientes";
import MascotaEditarPaciente from "./MascotaEditarPaciente";
import { useEffect, useState } from "react";

const EditarPaciente = ({ paciente, recargarData }) => {

  const [listadoMascotas, setListadoMascotas] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (editarPaciente) => {
    console.log(editarPaciente);
    crearPaciente(editarPaciente).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "Paciente editado",
          `El paciente ${editarPaciente.nombrePaciente} fue editado correctamente`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El paciente ${editarPaciente.nombrePaciente} no pudo ser editado, intente en unos minutos`,
          "error"
        );
      }
    });
  };

  useEffect(() => {
    if(paciente?.mascotas.length > 0) {
      setListadoMascotas(paciente.mascotas.map((mascota) => {
        return <MascotaEditarPaciente paciente={paciente} mascota={mascota} key={mascota.nombre}/>
      }));
    } 
  }, [paciente]);

  return (
    // <section className="container mainSection">
    <Row className="justify-content-center">
      <Col md={12} className="rounded-3">
        <h1 className="display-4">Editar Paciente</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h6 className="mt-5 mb-3">
            {" "}
            <span className="border-bottom border-warning">Due</span>ño
          </h6>
          <Form.Group className="mb-3" controlId="formNombrePaciente">
            <Row className="justify-content-start">
              <Col xs={12} md={6}>
                <Form.Label>Nombre*</Form.Label>
                <Form.Control
                  disabled={true}
                />
                <Form.Text className="text-danger">
                  {errors.nombrePaciente?.message} <br />
                </Form.Text>
                <Form.Label>Apellido*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Apellido"
                  {...register("apellidoPaciente", {
                    required: "El nombre del paciente es obligatorio.",
                    minLength: {
                      value: 2,
                      message: "Cantidad mínima de 2 caracteres.",
                    },
                    maxLength: {
                      value: 20,
                      message: "Cantidad máxima de 20 caracteres.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.apellidoPaciente?.message} <br />
                </Form.Text>{" "}
              </Col>
              <Col xs={12} md={6}>
                <Form.Label>Telefono*</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Ej: 3816173184"
                  {...register("numeroTelefonoPaciente", {
                    required: "El número celular del paciente es obligatorio.",
                    minLength: {
                      value: 7,
                      message:
                        "La cantidad mínima de caracteres es de 7 dígitos.",
                    },
                    maxLength: {
                      value: 10,
                      message:
                        "La cantidad máxima de caracteres es de 10 dígitos.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.numeroTelefonoPaciente?.message} <br />
                </Form.Text>
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Lamadrid 700"
                  {...register("direccion", {
                    required: "La direccion del paciente es obligatorio",
                    minLength: {
                      value: 5,
                      message: "Cantidad mínima de 5 caracteres.",
                    },
                    maxLength: {
                      value: 50,
                      message: "Cantidad máxima de 50 caracteres.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.direccion?.message} <br />
                </Form.Text>
              </Col>
            </Row>
          </Form.Group>
          <div className="text-center mt-5">
            <Button
              variant="primary"
              type="submit"
              className="bg-boton-planes btn text-white width-button-responsive"
            >
              Guardar
            </Button>
          </div>
        </Form>
        {listadoMascotas}
      </Col>
    </Row>
    // </section>
  );
};

export default EditarPaciente;
