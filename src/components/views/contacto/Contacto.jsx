import { useRef } from "react";
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
    reset
  } = useForm();

  const formRef = useRef(null);

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_hvmsxxs",
        "template_iwyhz5o",
        formRef.current,
        "yZZ-NX-fStDQ5repd"
      )
      .then((res) => {
        Swal.fire(
          "Mensaje enviado",
          "Se ha enviado el mensaje exitosamente! Nos comunicaremos a la brevedad",
          "success"
        );
        reset()
      });
  };
  return (
    <div className="form-area">
      <div className="container p-md-3 p-md-5 shadow bg-white rounded my-5">
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
                ref={formRef}
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
                    minLength={2}
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
                    maxLength={400}
                    name="mensaje"
                    required
                    {...register("mensaje", {
                      required: true,
                      minLength: 20,
                      maxLength: 400,
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
