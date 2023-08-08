import { useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { editarProducto } from "../../../helpers/queriesProductos";
import Swal from "sweetalert2";

const EditarProducto = ({
  producto,
  setModalShowEditar,
  actualizarProductos,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("nombreProducto", producto.nombreProducto);
    setValue("descripcion", producto.descripcion);
    setValue("precio", producto.precio);
    setValue("stock", producto.stock);
    setValue("imagen", producto.imagen);
  }, []);

  const onSubmit = (productoEditado) => {
    editarProducto(productoEditado, producto.id).then((respuesta) => {
      if (respuesta && respuesta.status === 200) {
        Swal.fire(
          "Producto editado",
          "El producto fue editado correctamente",
          "success"
        );
        actualizarProductos();
        setModalShowEditar(false);
      } else {
        Swal.fire(
          "Ocurrio un error",
          "El producto no pudo ser editado",
          "error"
        );
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="nombreProducto">
        <Form.Label>Producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre del producto"
          {...register("nombreProducto", {
            required: "El nombre del producto es obligatorio",
            minLength: {
              value: 2,
              message: "El nombre deve de contener como minimo 2 caracteres",
            },
            maxLength: {
              value: 100,
              message: "El nombre no deve de tener mas de 100 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.nombreProducto?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="descripcion">
        <Form.Label>Descripcion</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          {...register("descripcion", {
            required: "La descripcion es obligatoria",
            minLength: {
              value: 2,
              message:
                "La descripcion deve de contener como minimo 10 caracteres",
            },
            maxLength: {
              value: 600,
              message: "La descripcion no deve de tener mas de 600 caracteres",
            },
          })}
        />
        <Form.Text className="text-danger">
          {errors.descripcion?.message}
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="precio">
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ej: 50"
          {...register("precio", {
            required: "El precio del producto es obligatorio",
            min: {
              value: 0,
              message: "El precio minimo es de 0",
            },
            max: {
              value: 50000,
              message: "El precio maximo es de 50000",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="stock">
        <Form.Label>Stock</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ej: 50"
          {...register("stock", {
            required: "El stock del producto es obligatorio",
            min: {
              value: 0,
              message: "El stock minimo es de 0",
            },
            max: {
              value: 100,
              message: "El stock maximo es de 100",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.stock?.message}</Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="imagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ej: imagen.com/imagen.jpg"
          {...register("imagen", {
            required: "La URL de la imagen es obligatorio",
            pattern: {
              value:
                /^(https?:\/\/)?(?:www\.)?[\w-]+\.[\w.-]+(?:\/[\w-./?%&=]*)?\.(?:jpg|jpeg|png|gif|bmp|jpeg|webp\?[\w=&.]*)$/,
              message: "la URL deve de ser como 'imagen.com/imagen.jpg'",
            },
          })}
        />
        <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
      </Form.Group>
      <Button variant="secondary" onClick={() => setModalShowEditar(false)}>
        Cancelar
      </Button>
      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default EditarProducto;
