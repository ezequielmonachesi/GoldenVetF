import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const CrearPaciente = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (pacienteNuevo) => {
    console.log(pacienteNuevo);
    crearPaciente(pacienteNuevo).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "Paciente creado",
          `El paciente ${pacienteNuevo.nombrePaciente} fue creado correctamente`,
          "success"
        );
        reset();
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El paciente ${pacienteNuevo.nombrePaciente} no pudo ser creado, intente en unos minutos`,
          "error"
        );
      }
    });
  };

  

  return (
    // <section className="container mainSection">
      <Row className="justify-content-center">
        <Col md={12} className="rounded-3">
          <h1 className="display-4">Crear Paciente</h1>
          <hr />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <h6 className="mt-5 mb-3"> <span className="border-bottom border-warning">Due</span>ño</h6>
            <Form.Group className="mb-3" controlId="formNombrePaciente">
              <Row className="justify-content-start">
                <Col xs={12} md={6}>
                  <Form.Label>Nombre*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Ezequiel"
                    {...register("nombrePaciente", {
                      required: "El nombre del paciente es obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 dígitos",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "La cantidad minima de caracteres es de 50 digitos",
                      },
                    })}
                  />
                  <Form.Label>Apellido*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Apellido"
                    {...register("nombrePaciente", {
                      required: "El nombre del paciente es obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 dígitos",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "La cantidad minima de caracteres es de 50 digitos",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.nomrePaciente?.message}
                  </Form.Text>{" "}
                  <Form.Label>E-mail*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: correo@gmail.com"
                    {...register("nombrePaciente", {
                      required: "El nombre del paciente es obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 dígitos",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "La cantidad minima de caracteres es de 50 digitos",
                      },
                    })}
                  />
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Telefono*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Ezequiel"
                    {...register("nombrePaciente", {
                      required: "El nombre del paciente es obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 dígitos",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "La cantidad minima de caracteres es de 50 digitos",
                      },
                    })}
                  />
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Ezequiel"
                    {...register("nombrePaciente", {
                      required: "El nombre del paciente es obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 dígitos",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "La cantidad minima de caracteres es de 50 digitos",
                      },
                    })}
                  />
                </Col>
              </Row>
            </Form.Group>
            <h6 className="mt-5 mb-3"><span className="border-bottom border-warning">Mas</span>cota</h6>
            <Form.Group className="mb-3" controlId="formNombrePaciente">
              <Row className="justify-content-start">
                <Col xs={12} md={6}>
                  <Form.Label>Nombre*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Ezequiel"
                    {...register("nombrePaciente", {
                      required: "El nombre del paciente es obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 dígitos",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "La cantidad minima de caracteres es de 50 digitos",
                      },
                    })}
                  />
                  <Form.Label>Especie*</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Ezequiel"
                    {...register("nombrePaciente", {
                      required: "El nombre del paciente es obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 dígitos",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "La cantidad minima de caracteres es de 50 digitos",
                      },
                    })}
                  />
                  <Form.Text className="text-danger">
                    {errors.nombrePaciente?.message}
                  </Form.Text>{" "}
                </Col>
                <Col xs={12} md={6}>
                  <Form.Label>Raza</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Ezequiel"
                    {...register("nombrePaciente", {
                      required: "El nombre del paciente es obligatorio",
                      minLength: {
                        value: 2,
                        message:
                          "La cantidad minima de caracteres es de 2 dígitos",
                      },
                      maxLength: {
                        value: 50,
                        message:
                          "La cantidad minima de caracteres es de 50 digitos",
                      },
                    })}
                  />
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
        </Col>
      </Row>
    // </section>
  );
};

export default CrearPaciente;
