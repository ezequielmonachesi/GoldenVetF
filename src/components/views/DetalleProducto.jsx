import { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Image, Row } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { obtenerProducto } from "../helpers/queriesProductos";

const DetalleProducto = () => {
  const [mostrarMas, setMostrarMas] = useState(false);
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    obtenerProducto(id).then((respuesta) => setProducto(respuesta));
  }, []);
  const text =
    "Adulto Razas Medianas Provee nutrición de avanzada que ayuda a los perros de razas medianas a mantenerse fuertes y llenos de vitalidad. Esta fórmula ofrece, a través de sus sabrosas croquetas, un contenido rico en proteínas (26%) y grasas (15%), utilizando como ingrediente principal carne fresca de pollo, que ayuda a los perros a mantener la masa corporal magra y músculos fuertes. Descripción del producto BENEFICIOS: Refuerza el sistema inmune. Vitamina A y E, que ayuda a mantener las defensas naturales del sistema inmunológico, asegurando una mejor respuesta a los desafios externos. Fortalece la microflora intestinal. Ayuda a optimizar la absorción de nutrientes clave, fortaleciendo y estabilizando la microflora intestinal y, por lo tanto, mejorando la salud del sistema digestivo. Refuerza la barrera cutánea. Contiene ácidos grasos Omega 6 y vitamina A, que sumados a ácidos grasos Omega 3 y minerales, promueven una piel flexible y un pelaje resistente y brillante, actuando como la primera linea de defensa que tiene un perro contra amenazas externas.";

  return (
    <Container>
      <Row className="justify-content-around text-center text-md-start border shadow mt-5 pb-4 pb-md-0 rounded-3 mx-2">
        <Col sm={6}>
          <div>
            <Image src={producto.imagen} fluid></Image>
          </div>
        </Col>
        <Col sm={4} className="py-5 py-md-3 py-lg-5">
          <div className="text-end">
            <Button variant="outline-danger border-0">
              <Heart className="fs-5"></Heart>
            </Button>
          </div>
          <h5 className="mt-3">{producto.nombreProducto}</h5>
          <h3 className=" mt-3">$ {producto.precio}</h3>
          <Badge bg="danger" className="px-2 py-2 mt-3">
            1 Cuota Sin Interés
          </Badge>
          <p className=" mt-3">Stock: {producto.stock}</p>
        </Col>
        <Col sm={12} className=" px-4 p-md-5">
          <h6 className="text-start">Detalle del producto</h6>
          <p className="small mt-3 text-start">
            {mostrarMas
              ? producto.descripcion
              : `${producto.descripcion.substring(0, 250)}...`}
          </p>
          <div className="text-end">
            <button
              className="py-1 px-2 text-danger border-0 border-danger bg-danger bg-opacity-25 rounded-4"
              onClick={() => setMostrarMas(!mostrarMas)}
            >
              {mostrarMas ? (
                <p className="small m-0">Ver menos</p>
              ) : (
                <p className="small m-0">Ver más</p>
              )}
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
