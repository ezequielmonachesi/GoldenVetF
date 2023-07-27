import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registrarUsuarios } from "../helpers/queries";
import { useState } from "react";

// import { useNavigate } from "react-router-dom"; //CUANDO FUNCIONE LAS RUTAS DESCOMENTAR

const Registro = () => {
  const [errores, setErrores] = useState("");
  // const navegacion = useNavigate(); //CUANDO FUNCIONE LAS RUTAS DESCOMENTAR
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = (data) => {
    registrarUsuarios(data).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire("Bien Hecho!", "Te registraste correctamente", "success");
        // navegacion("/login"); //CUANDO FUNCIONE LAS RUTAS DESCOMENTAR
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
    <div className="mt-5 mainSection">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form
            className="form-registro mx-auto p-2 border shadow p-3 mb-5 bg-body-tertiary rounded"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-center registro">Registro</h3>
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
                  required: "El email es obligatorio",
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
                placeholder="Ingrese un password"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[a-zA-Z\d!@#$%^&*()]{8,16}$/,
                    message:
                      "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula, un carácter especial y un número. Además, la longitud máxima es de 16 caracteres.",
                  },
                })}
              />
              <Form.Text className="text-danger">
                {errors.password?.message}
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
          </Form>
          <div className="d-flex justify-content-end contenedor-inicia-sesion">
            <p>
              ¿Ya tienes cuenta?{" "}
              <span className="inicia-sesion">Inicia sesión</span> {/* CAMBIAR POR Link CUANDO HAYA RUTAS */}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registro;
