import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Button, Card, Form } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
import { setHours } from "date-fns";

registerLocale("es", es);

const FormularioTurno = () => {
  const {
    handleSubmit,
    control,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [formValues, setFormValues] = useState({
    veterinario: "",
    detalleVisita: "",
    paciente: "",
    fechaYHora: "",
  });

  const isWeekDay = (dia) => {
    const fechaHora = new Date(dia);
    const diaSemana = fechaHora.getDay();
    return diaSemana >= 1 && diaSemana <= 5;
  };

  const isDayDisabled = (date) => {
    return isWeekDay(date);
  };

  const validateHora = (value) => {
    if (!value) {
      return "Debe seleccionar una fecha y hora";
    }

    const selectedDate = new Date(value);

    const hora = selectedDate.getHours();
    const minutos = selectedDate.getMinutes();

    if (hora < 8 || hora > 20 || (hora == 20 && minutos == 30)) {
      return "El turno debe estar en el rango de 8 a 20 horas";
    }

    return true;
  };

  const onDateChange = (date) => {
    setFormValues({
      ...formValues,
      fechaYHora: date,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    <Card className="border shadow rounded my-3">
      <Card.Body className="bg-light">
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Fecha</Form.Label>
            <Controller
              name="fechaYHora"
              control={control}
              rules={{
                validate: validateHora,
              }}
              render={({ field }) => (
                <DatePicker
                  className={`form-control ${
                    errors.fechaYHora ? "is-invalid" : ""
                  }`}
                  selected={field.value}
                  onChange={(date) => {
                    field.onChange(date);
                    onDateChange(date);
                  }}
                  dateFormat="Pp"
                  showTimeSelect
                  locale="es"
                  timeCaption="Hora"
                  timeFormat="HH:mm"
                  minDate={new Date()}
                  filterDate={isDayDisabled}
                  minTime={setHours(new Date(), 7)}
                  maxTime={setHours(new Date(), 20)}
                />
              )}
            />
            <Form.Text className="text-danger">
              {errors.fechaYHora?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Veterinario</Form.Label>
            <Form.Select
              name="veterinario"
              {...register("veterinario", {
                required: "El nombre del veterinario es un dato obligatorio",
                minLength: {
                  value: 3,
                  message:
                    "El nombre del veterinario debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 100,
                  message:
                    "El nombre del veterinario debe tener máximo 100 caracteres",
                },
                pattern: {
                  value:
                    /^[A-Za-zÀ-ÿ\u00f1\u00d1][A-Za-zÀ-ÿ\u00f1\u00d1' -]*[A-Za-zÀ-ÿ\u00f1\u00d1]$/,
                  message:
                    "Debe ingresar un nombre sin caracteres especiales ni numeros",
                },
                validate: (value) =>
                  value === "Ezequiel" ||
                  value === "Nahuel" ||
                  "Debe seleccionar un veterinario válido",
              })}
            >
              <option value="">Ingrese una opción</option>
              <option value="Ezequiel">Ezequiel</option>
              <option value="Nahuel">Nahuel</option>
            </Form.Select>
            <Form.Text className="text-danger">
              {errors.veterinario?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mascota</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el nombre de la mascota"
              name="paciente"
              {...register("paciente", {
                required: "El nombre del paciente es un dato obligatorio",
                minLength: {
                  value: 2,
                  message:
                    "El nombre de la mascota debe tener al menos 2 caracteres",
                },
                maxLength: {
                  value: 50,
                  message:
                    "El nombre de la mascota debe tener máximo 50 caracteres",
                },
                pattern: {
                  value:
                    /^[A-Za-zÀ-ÿ\u00f1\u00d1][A-Za-zÀ-ÿ\u00f1\u00d1' -]*[A-Za-zÀ-ÿ\u00f1\u00d1]$/,
                  message:
                    "Debe ingresar un nombre sin caracteres especiales ni numeros",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.paciente?.message}
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Detalle visita</Form.Label>
            <Form.Control
              as="textarea"
              type="text"
              placeholder="Breve descripción de por qué trae a su mascota."
              name="detalleVisita"
              {...register("detalleVisita", {
                required: "El detalle de la visita es un dato obligatorio",
                minLength: {
                  value: 5,
                  message:
                    "El detalle de la visita debe tener al menos 5 caracteres",
                },
                maxLength: {
                  value: 150,
                  message:
                    "El detalle de la visita debe tener máximo 150 caracteres",
                },
              })}
            />
            <Form.Text className="text-danger">
              {errors.detalleVisita?.message}
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
