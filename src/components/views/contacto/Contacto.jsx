import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "./contacto.css";

const Contacto = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = () => {
    if (Object.keys(errors.length > 0)) {
      Swal.fire("Formulario incompleto", "Te faltaron llenar datos!", "error");
    } else {
      emailjs
        .sendForm(
          "service_hvmsxxs",
          "template_iwyhz5o",
          e.target,
          "yZZ-NX-fStDQ5repd"
        )
        .then((res) => {
          Swal.fire(
            "Mensaje enviado",
            "Se ha enviado el mensaje exitosamente! Nos comunicaremos a la brevedad",
            "success"
          );
          console.log(res)
        });
    }
  };

  return (
    <div className="form-area">
      <div className="container p-sm-3 p-md-5 shadow bg-white rounded my-5">
        <Row className="single-form g-0">
          <Col lg={6}>
            <div className="izquierda-contacto">
              <h2>
                <span>Contáctanos para</span>
                <br />
                consultas comerciales.
              </h2>
            </div>
          </Col>
          <Col lg={6}>
            <div className="derecha-contacto">
              <i className="bi bi-caret-left-fill"></i>
              <Form
                onSubmit={handleSubmit(onSubmit)}
                className="formularioContacto"
              >
                <Form.Group
                  className="mb-3"
                  controlId="formularioContacto.ControlInput1"
                >
                  <Form.Label>Correo electrónico</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="nombre@mail.com"
                    name="email"
                    required
                    maxLength={74}
                    {...register("email", {
                      required: true,
                      maxLength: 74,
                      pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i,
                    })}
                  />

                  {errors.email?.type === "required" && (
                    <p className="text-danger">El campo email es requerido</p>
                  )}
                  {errors.email?.type === "pattern" && (
                    <p className="text-danger">
                      El formato del email es incorrecto
                    </p>
                  )}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formularioContacto.ControlInput2"
                >
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Juan Diaz"
                    name="nombre"
                    required
                    maxLength={50}
                    aria-label="Nombre"
                    aria-describedby="nombre"
                    {...register("nombre", {
                      required: true,
                      maxLength: 50,
                    })}
                  />
                  {errors.nombre?.type === "required" && (
                    <p className="text-danger">El campo nombre es requerido</p>
                  )}
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formularioContacto.ControlTextarea1"
                >
                  <Form.Label>Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    minLength={20}
                    maxLength={500}
                    name="mensaje"
                    required                    
                    {...register("mensaje", {
                      required: true,
                      minLength: 20,
                      maxLength: 500,
                    })}
                  />
                  {errors.mensaje?.type === "required" && (
                    <p className="text-danger">El campo mensaje es requerido</p>
                  )}
                </Form.Group>
                <Button type="submit" variant="success border-3 shadow fs-3">
                  {" "}
                  Enviar
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Contacto;
