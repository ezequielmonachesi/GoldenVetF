import { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';

registerLocale('es', es);

const FormularioTurno = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [startDate, setStartDate] = useState(new Date());

    const [formValues, setFormValues] = useState({
        veterinario: '',
        detalleVisita: '',
        paciente: '',
        fechaYHora: new Date(),
    });

    const onSubmit = (mascota) => {
        console.log(mascota);
    }

    const isBefore = (dia) => {
        const fechaCreacion = new Date();
        const fechaHora = new Date(dia);
        return fechaHora >= fechaCreacion;
    };

    const isWeekday = (dia) => {
        const fechaHora = new Date(dia);
        const diaSemana = fechaHora.getDay();
        return diaSemana >= 0 && diaSemana <= 4;
    };

    const onDateChange = (date) => {
        setFormValues({
            ...formValues,
            fechaYHora: date,
        });
    }

    return (
        <Card className="border shadow rounded my-3">
            <Card.Body className="bg-light">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Fecha</Form.Label>
                        <DatePicker 
                            className="form-control" 
                            selected={formValues.fechaYHora} 
                            onChange={(event) => onDateChange(event)} 
                            dateFormat="Pp"
                            showTimeSelect
                            locale="es"
                            timeCaption="Hora"
                        />
                        {/* <Form.Control
                            type="date"
                            {...register('dia', {
                                required: 'Debe seleccionar un día',
                                validate: {
                                    fechaValida: (value) => isBefore(value) || "No es posible programar un turno para una fecha y hora anterior a la actual",
                                    weekend: (value) => isWeekday(value) || "No puede ser un fin de semana",
                                },
                            })}
                        /> */}
                        <Form.Text className="text-danger">
                            {errors.dia?.message}
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

export default FormularioTurno;