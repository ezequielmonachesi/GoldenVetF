import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ChatHeartFill } from "react-bootstrap-icons";
import Swal from "sweetalert2";
import { useForm} from "react-hook-form";
import { crearComentario } from "../../helpers/queriesComentarios";
import ValoracionConEstrellas from "./ValoracionConEstrellas";
import './FormularioTestimonios.css'

const FormularioTestimonios = () => {
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
          "comentario enviado",
          `El comentario fue enviado correctamente`,
          "success"
        );
        reset();
      }  else {
        Swal.fire(
          "Ocurrio un error",
          `El comentario no pudo ser enviado, intente en unos minutos`,
          "error"
        );
      }
    });
  };

  return (
    <Container className="d-flex justify-content-center bg-light mb-3 mb-md-5 shadow rounded bg-opacity-75">
      <Col md={8}>
        <div className="border px-3 px-md-4 px-lg-5 mx-md-2 mx-lg-5 py-3 mt-5 shadow rounded-3 bg-light mb-3 mb-md-5">
          <Row>
            <Col xs={12}>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <h5>Envíanos tu comentario</h5>
                <ChatHeartFill className="fs-2"></ChatHeartFill>
              </div>
            </Col>
            <Col className="mt-3">
              <Form onSubmit={handleSubmit(onSubmit)} className="formulario-testimonios">
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
                        message: "Cantidad máxima de 16 caracteres.",
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
                      <ValoracionConEstrellas register={register}/>
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Comentario</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    minLength={10}
                    maxLength={200}
                    required
                    {...register("comentario", {
                      required: "El comentario es requerido",
                      minLength: {
                        value: 10,
                        message:
                          "El comentario debe tener como mínimo 10 caracteres y como máximo 200",
                      },
                      maxLength: {
                        value: 200,
                        message:
                          "El comentario debe tener como mínimo 10 caracteres y como máximo 200",
                      },
                    })}
                  ></Form.Control>
                  <Form.Text className="text-danger">
                    {" "}
                    {errors.comentario?.message}
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
