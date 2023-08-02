import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm, useFieldArray } from "react-hook-form";
import Swal from "sweetalert2";
import { crearServicio } from "../../../helpers/queriesServicios";
import { useState } from "react";

const CrearServicio = ({ actualizarServicios }) => {
  const [errores, setErrores] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const {
    fields: subserviciosFields,
    append: appendSubservicios,
    remove: removeSubservicios,
  } = useFieldArray({
    control,
    name: "subservicios",
  });
  const [subserviciosLimitReached, setSubserviciosLimitReached] = useState(false);

  const agregarSubservicio = () => {
    if(subserviciosFields.length<10){
    appendSubservicios({
      nombreSubservicio: "",
      descripcionSubservicio: "",
      imagenSubservicio: "",
    });
    setSubserviciosLimitReached(false)
  }else{
    setSubserviciosLimitReached(true)
  }

  };
  const borrarUltimoSubservicio = () => {
    if (subserviciosFields.length > 0) {
      const lastIndex = subserviciosFields.length - 1;
      removeSubservicios(lastIndex);
      setIngredientesLimitReached(false);
    }
  };

  const onSubmit = (servicioNuevo) => {
    const { confirmPassword, ...restoData } = servicioNuevo;
    if (servicioNuevo.password !== servicioNuevo.confirmPassword) {
      setErrores("Las contraseñas no coinciden");
      return;
    }
    crearServicio(servicioNuevo).then((respuesta) => {
      if (respuesta && respuesta.status === 201) {
        Swal.fire(
          "servicio creado",
          `El servicio ${servicioNuevo.nombreServicio} fue creado correctamente`,
          "success"
        );
        actualizarServicios();
        reset();
      } else if (respuesta && respuesta.status === 400) {
        setErrores(respuesta.data.mensaje);
      } else {
        Swal.fire(
          "Ocurrio un error",
          `El servicio ${servicioNuevo.nombreServicio} no pudo ser creado, intente en unos minutos`,
          "error"
        );
      }
    });
  };

  return (
    <Row className="justify-content-center">
      <Col className="rounded-3">
        <h1 className="display-4">Crear servicio</h1>
        <hr />
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Row className="justify-content-start">
              <Col>
                <Form.Label>Nombre*</Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Ej: Peluqueria canina"
                  {...register("nombreServicio", {
                    required: "El nombre del servicio es obligatorio.",
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
                  {errors.nombreServicio?.message} <br />
                </Form.Text>
                <Form.Label>Url Imagen*</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese la url de la imagen"
                  required
                  {...register("imagen", {
                    required: "La imagen es un dato obligatorio.",
                    pattern: {
                      value:
                        /^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg\?[\w=&.]*)$/,
                      message:
                        "La URL de la imagen no es válida. Asegúrate de que esté correctamente escrita y que termine con una extensión de imagen válida. Ejemplo de formato válido: 'https://www.ejemplo.com/imagen.jpg' ",
                    },
                  })}
                />
                <Form.Text className="text-danger">
                  {errors.image?.message} <br />
                </Form.Text>
                <Form.Label>Descripcion*</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Descrpcion del servicio"
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
              </Col>
              <div className="d-flex">
                <Form.Label>Subservicios ({subserviciosFields.length})</Form.Label>
                <div className="ms-auto">
                  
                  <Button variant="success" onClick={agregarSubservicio}>
                    +
                  </Button>
                  <Button variant="danger" onClick={borrarUltimoSubservicio}>
                    -
                  </Button>
                </div>
                
              </div>
              {subserviciosLimitReached && (
<p className="text-danger">
Se ha alcanzado el límite de inputs. No se pueden agregar más campos.
</p>)}
              {subserviciosFields.map((field, index) => (
                <div key={field.id}>
                  <Form.Group className="mb-3">
                    <p className="">{index+1})</p>
                  <hr/>
                      <Row>
                      <Col md={4}>
                        <Form.Label>Nombre del Subservicio*</Form.Label>
                        <Form.Control
                          {...register(
                            `subservicios[${index}].nombreSubservicio`,
                            {
                              required:
                                "El nombre del subservicio es obligatorio",
                              minLength: {
                                value: 2,
                                message: "Cantidad mínima de 2 caracteres.",
                              },
                              maxLength: {
                                value: 100,
                                message: "Cantidad máxima de 100 caracteres.",
                              },
                            }
                          )}
                          defaultValue={field.nombreSubservicio}
                        />
                        <Form.Text className="text-danger">
                          {errors.subservicios &&
                            errors.subservicios[index] && (
                              <p>
                                {
                                  errors.subservicios[index].nombreSubservicio
                                    ?.message
                                }
                              </p>
                            )}
                        </Form.Text>
                      </Col>
                      <Col md={4}>
                     
                      
                        <Form.Label>Descripción del Subservicio*</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={3}
                          placeholder="Descripción del subservicio"
                          required
                          {...register(
                            `subservicios[${index}].descripcionSubservicio`,
                            {
                              required:
                                "La descripción del subservicio es obligatoria",
                              minLength: {
                                value: 2,
                                message: "Cantidad mínima de 2 caracteres.",
                              },
                              maxLength: {
                                value: 600,
                                message: "Cantidad máxima de 600 caracteres.",
                              },
                            }
                          )}
                          defaultValue={field.descripcionSubservicio}
                        />
                        <Form.Text className="text-danger">
                          {errors.subservicios &&
                            errors.subservicios[index] && (
                              <p>
                                {
                                  errors.subservicios[index]
                                    .descripcionSubservicio?.message
                                }
                              </p>
                            )}
                        </Form.Text>
                      </Col>
                      <Col md={4}>
                        <Form.Label>URL Imagen del Subservicio*</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese la URL de la imagen"
                          required
                          {...register(
                            `subservicios[${index}].imagenSubservicio`,
                            {
                              required:
                                "La URL de la imagen es un dato obligatorio.",
                              pattern: {
                                value:
                                  /^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg\?[\w=&.]*)$/,
                                message:
                                  "La URL de la imagen no es válida. Asegúrate de que esté correctamente escrita y que termine con una extensión de imagen válida. Ejemplo de formato válido: 'https://www.ejemplo.com/imagen.jpg'",
                              },
                            }
                          )}
                          defaultValue={field.imagenSubservicio}
                        />
                        <Form.Text className="text-danger">
                          {errors.subservicios &&
                            errors.subservicios[index] && (
                              <p>
                                {
                                  errors.subservicios[index].imagenSubservicio
                                    ?.message
                                }
                              </p>
                            )}
                        </Form.Text>
                      </Col>
                      </Row>                
                  </Form.Group>
                </div>
              ))}

            </Row>
          </Form.Group>
          {errores && <Form.Text className="text-danger">{errores}</Form.Text>}
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
};

export default CrearServicio;
