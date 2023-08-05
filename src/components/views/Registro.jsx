import { Card, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearUsuario } from "../helpers/queriesUsuarios";
import { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

const Registro = () => {
  const [errores, setErrores] = useState("");
  const navegacion = useNavigate();
  const {
    formState: { errors },
    handleSubmit,
    register,
    reset
  } = useForm();

  const onSubmit = (data) => {
    const { confirmPassword, ...restoData } = data
    if (data.password !== data.confirmPassword) {
      setErrores("Las contraseñas no coinciden")
      return
    }
    crearUsuario(restoData).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire("Bien Hecho!", "Te registraste correctamente", "success");
        reset()
        navegacion("/login");
      } else if (respuesta && respuesta.status === 400) {
        setErrores(respuesta.data.mensaje);
      } else {
        Swal.fire(
          "Error",
          "Hubo un error al registrarse intenta nuevamente en unos minutos",
          "error"
        );
      }
    });
  };
  return (
    <Container className="login-container my-5">
      <Card className="border shadow rounded my-5 login-card">
        <Card.Header className="text-dark card-header-bg" as="h4">Registro</Card.Header>
        <Card.Body className="bg-light">
          <Form
            className=""
            onSubmit={handleSubmit(onSubmit)}
          >
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario"
                {...register("nombreUsuario", {
                  minLength: {
                    value: 2,
                    message: "La cantidad mínima de carateres es de 2 digitos",
                  },
                  maxLength: {
                    value: 16,
                    message:
                      "La cantidad máximo de caracteres es de 16 digitos",
                  },
                  required: "El nombre de usuario es requerido",
                })}
              />
              <Form.Text className="text-danger">
                {errors.nombreUsuario?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un email"
                {...register("email", {
                  required: "El email es requerido",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message:
                      "El email debe tener un formato valido (mail@dominio.com)",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.email?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="password"
                placeholder="Ingrese una contraseña"
                {...register("password", {
                  required: "La contraseña es requerida",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,16}$/
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
                {...register("confirmPassword", {
                  required: "Debe confirmar su contraseña",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,16}$/,
                    message:
                      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un carácter especial y un número. Además, la longitud máxima es de 16 caracteres.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.confirmPassword?.message}
              </Form.Text>
            </Form.Group>
            {errores && (
              <Form.Text className="text-danger">{errores}</Form.Text>
            )}
            <div className="row w-75 d-flex justify-content-center text-center ms-5 ps-lg-5 mt-2">
              <button className="btn-registro mb-2 rounded" type="submit">
                Registrar
              </button>
            </div>
            <div className="d-flex justify-content-end contenedor-inicia-sesion">
              <p>
                ¿Ya tienes cuenta?{" "}
                <Link to={'/login'} className="inicia-sesion fw-semibold">Inicia sesión</Link>
              </p>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Registro;
