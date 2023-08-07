import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { editarPaciente } from "../../../helpers/queriesPacientes";
import Swal from "sweetalert2";

const FormularioAgregarHistoriaMedica = ({paciente, mascota, refetchData}) => {

    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm();

    const onSubmit = async (registro) => {

        const historiaMedicaDeHoy = {
            ...registro,
            fecha: new Date()
        }
        delete paciente.mascotas;

        mascota.historialMedico = historiaMedicaDeHoy;

        const datosFormulario = { ...paciente, mascota };

        console.log(datosFormulario);
        
        editarPaciente(datosFormulario, paciente.id).then((respuesta) => {
            if (respuesta && respuesta.status === 200) {
                Swal.fire('Historial medico agregado', `Se actualizó correctamente el historial medico de ${mascota.nombre}`, 'success');
                reset();
                refetchData();
            } else {
                Swal.fire('Ocurrió un error', `No se pudo actualizar el historial medico, intente en unos minutos`, 'error');
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
                            placeholder="Ingrese la historia medica de hoy"
                            {...register('registro', {
                                required: 'El historial medico es obligatorio',
                                minLength: {
                                    value: 10,
                                    message: 'El historial medico debe tener al menos 10 caracteres'
                                },
                                maxLength: {
                                    value: 500,
                                    message: 'El historial medico tener maximo 500 caracteres'
                                },
                            })}
                        />
                        <Form.Text className="text-danger">
                            {errors.registro?.message}
                        </Form.Text>
                    </Form.Group>
                    <Button variant="success" type="submit">
                        Agregar historia
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default FormularioAgregarHistoriaMedica;