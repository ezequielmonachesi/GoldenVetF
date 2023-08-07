import { Form, Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { editarComentario } from "../../../helpers/queriesComentarios";

const EditarComentario = ({
  comentario,
  handleClose,
  actualizarComentarios,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    setValue("nombre", comentario.nombre);
    setValue("puntuacion", comentario.puntuacion);
    setValue("comentario", comentario.comentario);
  }, []);

  const onSubmit = (comentarioEditado) => {
    editarComentario(comentarioEditado, comentario.id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Comentario editado",
          "El comentario fue editado correctamente",
          "success"
        );
        actualizarComentarios()
        handleClose()
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="text"
          {...register("nombre", {
            required: "El nombre es requerido",
            minLength: {
              value: 2,
              message: "El nombre debe tener un minimo de 2 caracteres",
            },
            maxLength: {
              value: 16,
              message: "El nombre debe tener como máximo 16 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
      </Form.Group>
      <Form.Group controlId="puntuacion" className="my-3">
        <Form.Label>Puntuación</Form.Label>
        <Form.Control
          as="select"
          {...register("puntuacion", {
            required: "La puntuacion es requerida",
            max: 5,
            min: 1,
          })}
        >
          <option value="">Seleccione una opcion</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
        <Form.Text className="text-danger">
          {errors.puntuacion?.message}.{" "}
          {errors.puntuacion && "La puntuacion mínima es 1 y la máxima 5"}
        </Form.Text>
      </Form.Group>
      <Form.Group controlId="comentario">
        <Form.Label>Comentario</Form.Label>
        <Form.Control
          as="textarea"
          rows={4}
          {...register("comentario", {
            required: "El comentario es requerido",
            minLength: {
              value: 10,
              message:
                "El comentario debe tener como mínimo 10 caracteres y como máximo 200",
            },
            maxLength: {
              value: 200,
              message:
                "El comentario debe tener como mínimo 10 caracteres y como máximo 200",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.comentario?.message}
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit" className="mt-2">
        Guardar
      </Button>
    </Form>
  );
};

export default EditarComentario;
