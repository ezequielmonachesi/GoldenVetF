import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearPaciente } from "../../../helpers/queriesPacientes";
import { obtenerUsuario } from "../../../helpers/queriesUsuarios";

const CrearPaciente = ({ usuarios }) => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [usuarioBuscado, setUsuarioBuscado] = useState([]);
  const [usuarioEncontrado, setUsuarioEncontrado] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState("");

  useEffect(() => {
    obtenerUsuario(usuarioSeleccionado.id).then((respuesta) => {
      setValue("nombrePaciente", respuesta.nombreUsuario);
      setValue("email", respuesta.email);
    });
  }, [usuarioSeleccionado]);

  const handleUsuarioChange = (e) => {
    const usuarioIdSeleccionado = e.target.value;
    // Buscar el usuario correspondiente al usuarioIdSeleccionado
    const usuarioIdElegido = usuarios.find(
      (usuario) => usuario.id === usuarioIdSeleccionado
    );
    // Actualizar el estado con el usuario seleccionado
    console.log(usuarioIdElegido.id);
    setUsuarioSeleccionado(usuarioIdElegido);
  };

  useEffect(() => {
    buscarUsuario(usuarioBuscado);
  }, [usuarioBuscado]);

  const buscarUsuario = (usuarioBuscado) => {
    if (usuarioBuscado) {
      const usuarioEncontrado = usuarios.filter((usuario) => {
        return usuario.nombreUsuario.toLowerCase().includes(usuarioBuscado);
      });
      setUsuarioEncontrado(usuarioEncontrado);
      console.log(usuarioEncontrado);
    }
  };

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
        <Row>
          <Col>
            <Form
              className="d-flex flex-column"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <h6 className="mt-4 mb-3">
                <span className="border-bottom border-warning">Bus</span>car
                usuarios
              </h6>
              <Form.Control
                placeholder="Buscar"
                className="me-2"
                aria-label="Search"
                value={usuarioBuscado}
                onChange={(e) => {
                  setUsuarioBuscado(e.target.value);
                }}
              />
              <p className="mb-1 mt-2">
                <span className="border-bottom border-warning">Lis</span>tado de
                usuarios
              </p>
              <Form.Select
                aria-label="Default select example"
                onChange={handleUsuarioChange}
              >
                <option value="">Elegir usuario</option>
                {usuarioEncontrado.length > 0 ? (
                  usuarioEncontrado.map((usuario) => (
                    <option value={usuario.id} key={usuario.id}>
                      {usuario.nombreUsuario}
                    </option>
                  ))
                ) : (
                  <option value="">No se encontraron usuarios</option>
                )}
              </Form.Select>
            </Form>
          </Col>
        </Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <h6 className="mt-4 mb-3">
            <span className="border-bottom border-warning">Due</span>ño
          </h6>
          <Form.Group className="mb-3" controlId="formNombrePaciente">
            <Row className="justify-content-start">
              <Col xs={12} md={6}>
                <Form.Label>Nombre*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Ezequiel"
                  {...register("nombrePaciente", {
                    required: "El nombre del paciente es obligatorio.",
                    minLength: {
                      value: 2,
                      message: "Cantidad mínima de 2 caracteres.",
                    },
                    maxLength: {
                      value: 50,
                      message: "Cantidad máxima de 50 caracteres.",
                    },
                  })}
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
                <Form.Label>E-mail*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese un email"
                  {...register("email", {
                    required: "El email es un dato obligatorio.",
                    pattern: {
                      value:
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                      message:
                        "El email debe tener un formato valido (mail@dominio.com)",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.email?.message} <br />
                </Form.Text>
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
          <h6 className="mt-5 mb-3">
            <span className="border-bottom border-warning">Mas</span>cota
          </h6>
          <Form.Group className="mb-3" controlId="formNombrePaciente">
            <Row className="justify-content-start">
              <Col xs={12} md={6}>
                <Form.Label>Nombre*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Tobi"
                  {...register("nombreMascota", {
                    required: "El nombre de la mascota es obligatorio.",
                    minLength: {
                      value: 2,
                      message: "Cantidad mínima de 2 caracteres.",
                    },
                    maxLength: {
                      value: 50,
                      message: "Cantidad máxima de 50 caracteres.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombreMascota?.message} <br />
                </Form.Text>
                <Form.Label>Especie*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Perro"
                  {...register("especie", {
                    required: "La especie de la mascota es obligatorio.",
                    minLength: {
                      value: 2,
                      message: "Cantidad mínima de 2 caracteres.",
                    },
                    maxLength: {
                      value: 50,
                      message: "Cantidad máxima de 50 caracteres.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.nombrePaciente?.message}
                </Form.Text>
              </Col>
              <Col xs={12} md={6}>
                <Form.Label>Raza</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: Labrador"
                  {...register("raza", {
                    required: "El nombre de la raza es obligatorio.",
                    minLength: {
                      value: 2,
                      message: "Cantidad mínima de 50 caracteres.",
                    },
                    maxLength: {
                      value: 50,
                      message: "Cantidad máxima de 50 caracteres.",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.raza?.message}
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
      </Col>
    </Row>
    // </section>
  );
};

export default CrearPaciente;
