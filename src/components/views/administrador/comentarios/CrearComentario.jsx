import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { Form, Button } from "react-bootstrap";

const CrearComentario = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombre">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="puntuacion" className="my-3">
        <Form.Label>Puntuación</Form.Label>
        <Form.Control as="select">
          <option value="">Seleccione una opcion</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="comentario">
        <Form.Label>Comentario</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>

      <Button variant="primary" type="submit" className="mt-2">
        Enviar comentario
      </Button>
    </Form>
  );
};

export default CrearComentario;
