import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { editarPaciente } from "../../helpers/queriesPacientes";

const FormularioNuevaMascota = ({dataPaciente, onFormSubmit}) => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (mascota) => {
        delete dataPaciente.mascotas;
        const datosFormulario = {...dataPaciente, mascota};
        console.log(datosFormulario)
        try {
            const respuesta = await editarPaciente(datosFormulario, dataPaciente.id);
            console.log(respuesta);
            onFormSubmit();
        } catch (error) {
            console.log(error)
        }
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
                            {errors.mascota?.message}
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

                    
                    <Button variant="primary" type="submit">
                        Ingresar
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default FormularioNuevaMascota;