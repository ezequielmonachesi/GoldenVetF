import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ChatHeartFill } from "react-bootstrap-icons";
import ValoracionConEstrellas from "./ValoracionConEstrellas";
import { useForm} from "react-hook-form";
import { useState } from "react";

const FormularioTestimonios = () => {
  const [errores, setErrores] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (comentarioNuevo) => {
    crearComentario(comentarioNuevo).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "comentario creado",
          `El comentario ${comentarioNuevo.nombreComentario} fue creado correctamente`,
          "success"
        );
        reset();
      } else if (respuesta && respuesta.status === 400) {
        setErrores(respuesta.data.mensaje);
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El comentario ${comentarioNuevo.nombreComentario} no pudo ser creado, intente en unos minutos`,
          "error"
        );
      }
    });
  };

  return (
    <Container className="d-flex justify-content-center">
      <Col md={8}>
        <div className="border px-3 px-md-4 px-lg-5 mx-md-2 mx-lg-5 py-3 mt-5 rounded-3  bg-white">
          <Row>
            {/* Titulo Formulario */}
            <Col xs={12}>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h5>Envíanos tu comentario</h5>
                <ChatHeartFill className="fs-2"></ChatHeartFill>
              </div>
            </Col>
            {/* Formulario */}
            <Col className="mt-3">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Juan Perez"
                    {...register("nombre", {
                      required: "El nombre es obligatorio.",
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
                    {errors.nombre?.message} <br />
                  </Form.Text>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>
                    <div className="d-flex align-items-center">Puntuación</div>
                  </Form.Label>
                  <ValoracionConEstrellas />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Comentario</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    minLength={20}
                    maxLength={600}
                    required
                    {...register("descripcion", {
                      required: "La descripcion es obligatoria",
                    })}
                  ></Form.Control>
                  <Form.Text className="text-danger">
                    {" "}
                    {errors.descripcion?.message}
                  </Form.Text>
                </Form.Group>
                <div className="text-end">
                  <Button
                    variant="dark"
                    type="submit"
                    className="width-button-responsive"
                  >
                    Enviar
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </Col>
    </Container>
  );
};

export default FormularioTestimonios;
