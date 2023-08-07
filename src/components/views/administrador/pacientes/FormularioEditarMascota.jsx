import { useEffect } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { editarPaciente } from "../../../helpers/queriesPacientes";
import Swal from "sweetalert2";

const FormularioEditarMascota = ({paciente, mascota}) => {

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

    useEffect(() => {
        setValue("nombre", mascota.nombre);
        setValue("especie", mascota.especie);
        setValue("raza", mascota.raza);
        setValue("imagen", mascota.imagen);
    },[]);

    const onSubmit = async (mascota) => {
        delete paciente.mascotas;
        const datosFormulario = { ...paciente, mascota };
        
        if(datosFormulario.mascota.imagen === "") delete datosFormulario.mascota.imagen;

        editarPaciente(datosFormulario, paciente.id).then((respuesta) => {
            if (respuesta && respuesta.status === 200) {
                Swal.fire('Mascota editada', `La mascota ${mascota.nombre} fue editada correctamente`, 'success');
                reset();
            } else {
                Swal.fire('Ocurrió un error', `La mascota ${mascota.nombre} no pudo ser editada, intente en unos minutos`, 'error');
            }
        });
    }

    return (
        <Card className="border shadow rounded my-3">
            <Card.Body className="bg-light">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre de la mascota"
                            {...register('nombre', {
                                required: 'El nombre de la mascota es obligatorio',
                                minLength: {
                                    value: 3,
                                    message: 'El nombre debe tener al menos 3 caracteres'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'El nombre debe tener maximo 20 caracteres'
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
                        <Form.Label>Especie</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese la especie de su mascota"
                            {...register('especie', {
                                required: 'La especie de la mascota es obligatoria',
                                minLength: {
                                    value: 3,
                                    message: 'La especie debe tener al menos 3 caracteres'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'La especie debe tener maximo 20 caracteres'
                                },
                                pattern: {
                                    value: /^[A-Za-zÀ-ÿ\u00f1\u00d1][A-Za-zÀ-ÿ\u00f1\u00d1' -]*[A-Za-zÀ-ÿ\u00f1\u00d1]$/,
                                    message: 'Debe ingresar un nombre especie valida, no puede contener numeros o caracteres especiales'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.especie?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Raza</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese la raza de su mascota"
                            {...register('raza', {
                                required: 'La raza de la mascota es obligatoria',
                                minLength: {
                                    value: 3,
                                    message: 'La raza debe tener al menos 3 caracteres'
                                },
                                maxLength: {
                                    value: 20,
                                    message: 'La raza debe tener maximo 20 caracteres'
                                },
                                pattern: {
                                    value: /^[A-Za-zÀ-ÿ\u00f1\u00d1][A-Za-zÀ-ÿ\u00f1\u00d1' -]*[A-Za-zÀ-ÿ\u00f1\u00d1]$/,
                                    message: 'Debe ingresar un nombre raza valida, no puede contener numeros o caracteres especiales'
                                }
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.raza?.message}
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Url Imagen</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese la url de la imagen"
                            {...register("imagen", {
                                pattern: {
                                    value:/^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg\?[\w=&.]*)$/,
                                    message: "La URL de la imagen no es válida. Asegúrate de que esté correctamente escrita y que termine con una extensión de imagen válida. Ejemplo de formato válido: 'https://www.ejemplo.com/imagen.jpg' ",
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.imagen?.message}
                        </Form.Text>
                    </Form.Group>


                    <Button variant="success" type="submit">
                        Editar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default FormularioEditarMascota;