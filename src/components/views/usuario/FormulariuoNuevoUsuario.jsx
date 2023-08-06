import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearPaciente } from "../../helpers/queriesPacientes";
import Swal from "sweetalert2";

const FormularioNuevoUsuario = ({ idUsuario }) => {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = async (paciente) => {
        const datosFormulario = {idUsuario, ...paciente};
        crearPaciente(datosFormulario).then((respuesta) => {
            if (respuesta && respuesta.status === 201) {
                Swal.fire('Datos de contacto agregados', `gracias ${paciente.nombreDuenio} tus datos fueron agregados correctamente`, 'success');
                reset();
                location.reload();
            } else {
                Swal.fire('Ocurrió un error', `No pudimos agregar tus datos, intente en unos minutos`, 'error');
            }
        });
    }

    return (
        <Card className="border shadow rounded my-3 p-5">
            <Card.Body className="bg-light">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre del dueño"
                            {...register('nombreDuenio', {
                                required: 'El nombre del dueño es obligatorio',
                                minLength: {
                                    value: 2,
                                    message: 'El nombre debe tener al menos 2 caracteres'
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'El nombre debe tener maximo 50 caracteres'
                                },
                                pattern: {
                                    value: /^[A-Za-zÀ-ÿ\u00f1\u00d1][A-Za-zÀ-ÿ\u00f1\u00d1' -]*[A-Za-zÀ-ÿ\u00f1\u00d1]$/,
                                    message: 'Debe ingresar un nombre válido, no puede contener numeros o caracteres especiales'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.nombre?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su apellido"
                            {...register('apellido', {
                                required: 'El apellido es obligatorio',
                                minLength: {
                                    value: 2,
                                    message: 'El apellido debe tener al menos 2 caracteres'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'El apellido debe tener maximo 20 caracteres'
                                },
                                pattern: {
                                    value: /^[A-Za-zÀ-ÿ\u00f1\u00d1][A-Za-zÀ-ÿ\u00f1\u00d1' -]*[A-Za-zÀ-ÿ\u00f1\u00d1]$/,
                                    message: 'Debe ingresar un apellido válido, no puede contener numeros o caracteres especiales'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.apellido?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Ingrese su número de teléfono"
                            {...register('telefono', {
                                required: 'El teléfono es obligatorio',
                                pattern: {
                                    value: /^[0-9]{7,10}$/,
                                    message: 'Debe ingresar un número de teléfono válido de 7 a 10 dígitos',
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.telefono?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Dirección</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su dirección de casa"
                            {...register('direccion', {
                                required: 'La dirección es obligatoria',
                                minLength: {
                                    value: 5,
                                    message: 'La dirección debe tener al menos 5 caracteres',
                                },
                                maxLength: {
                                    value: 50,
                                    message: 'La dirección debe tener máximo 50 caracteres',
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.direccion?.message}
                        </Form.Text>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Ingresar datos
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default FormularioNuevoUsuario;