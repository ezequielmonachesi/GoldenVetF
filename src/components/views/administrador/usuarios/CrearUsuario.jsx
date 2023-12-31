import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearUsuario } from "../../../helpers/queriesUsuarios";
import { useState } from "react";

const CrearUsuario = ({actualizarUsuarios}) => {
    const [errores, setErrores] = useState("");
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();

  const onSubmit = (usuarioNuevo) => {
    const { confirmPassword, ...restoData } = usuarioNuevo
    if (usuarioNuevo.password !== usuarioNuevo.confirmPassword) {
        setErrores("Las contraseñas no coinciden")
        return
      }
    crearUsuario(usuarioNuevo).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "usuario creado",
          `El usuario ${usuarioNuevo.nombreUsuario} fue creado correctamente`,
          "success"
        );
        actualizarUsuarios();
        reset();
      } else if (respuesta && respuesta.status === 400) {
        setErrores(respuesta.data.mensaje);
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El usuario ${usuarioNuevo.nombreUsuario} no pudo ser creado, intente en unos minutos`,
          "error"
        );
      }
    });
  };

    return (
<Row className="justify-content-center">
      <Col  className="rounded-3">
        <h1 className="display-4">Crear usuario</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group className="mb-3">
            <Row className="justify-content-start">
              <Col >
                <Form.Label>Nombre*</Form.Label>
                
                <Form.Control
                  type="text"
                  placeholder="Ej: Nahuel"
                  {...register("nombreUsuario", {
                    required: "El nombre del usuario es obligatorio.",
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
                  {errors.nombreUsuario?.message} <br />
                </Form.Text>
                
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
                <Form.Label>Rol*</Form.Label>
                <Form.Select required
                           {...register("rol", {
                            required: "el rol es obligatorio",
                          })}>
                    <option value="">Seleccione un rol</option>
                    <option value="usuario">Usuario</option>
                    <option value="administrador">Administrador</option>
         
                </Form.Select>
                <Form.Text className="text-danger"> {errors.rol?.message}</Form.Text>
                <Form.Label>Contraseña*</Form.Label>
                <Form.Group className="mb-2">
              <Form.Control
                type= {passwordShown ? 'text' :'password'}
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
                type={passwordShown ? "text" : "password"}
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
              <div className="d-flex pt-3">
              <Form.Check type="checkbox" value="Mostrar Contraseña" id="flexCheckChecked" label="Mostrar contraseña" onClick={togglePassword}></Form.Check>              
              </div>
            </Form.Group>
              </Col>
            </Row>
          </Form.Group>
          {errores && (
              <Form.Text className="text-danger">{errores}</Form.Text>
            )}
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
    );
    }

export default CrearUsuario;