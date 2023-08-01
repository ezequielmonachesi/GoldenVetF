import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { crearUsuario } from "../../../helpers/queriesUsuarios";

const CrearUsuario = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();

  const onSubmit = (usuarioNuevo) => {
    console.log(usuarioNuevo);
    crearUsuario(usuarioNuevo).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "usuario creado",
          `El usuario ${usuarioNuevo.nombreUsuario} fue creado correctamente`,
          "success"
        );
        reset();
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
      <Col md={12} className="rounded-3">
        <h1 className="display-4">Crear usuario</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>

          <Form.Group className="mb-3" controlId="formNombreUsuario">
            <Row className="justify-content-start">
              <Col xs={12} md={6}>
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
                <Form.Select>
                    <option>Seleccione un rol</option>
                    <option value="usuario">Usuario</option>
                    <option value="administrador">Administrador</option>
                </Form.Select>
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
    );
    }

export default CrearUsuario;