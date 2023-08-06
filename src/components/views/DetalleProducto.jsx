import { useEffect, useState } from "react";
import { Badge, Button, Col, Container, Image, Row } from "react-bootstrap";
import { Heart } from "react-bootstrap-icons";
import { useParams } from "react-router-dom";
import { obtenerProducto } from "../helpers/queriesProductos";
import { Cart4 } from "react-bootstrap-icons";

const DetalleProducto = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams();

  useEffect(() => {
    obtenerProducto(id).then((respuesta) => setProducto(respuesta));
  }, []);

  return (
    <Container className="bg-light my-5 border shadow rounded p-sm-3 p-md-5">
      <Row className="justify-content-between text-center text-md-start mt-2 pb-4 pb-md-0 mx-2">
        <Col sm={6}>
          <Image src={producto.imagen} className="img-fluid"></Image>
        </Col>
        <Col sm={4} className="py-2 py-md-1 py-lg-5">
          <div className="text-end">
            <Button variant="outline-danger border-0">
              <Heart className="fs-5"></Heart>
            </Button>
          </div>
          <h2 className="mt-1 text-danger">{producto.nombreProducto}</h2>
          <h3 className="mt-3">$ {producto.precio}</h3>
          <Badge bg="danger" className="py-2 mt-3 ">
            1 Cuota Sin Interés
          </Badge>
          <p className="plan-description mt-3 fw-bold">Stock: {producto.stock}</p>
          <div className="my-4">
            <Button className="p-2" variant="success"><Cart4 className="mb-1"/> Agregar al carrito</Button>
          </div>
        </Col>
        <Col sm={12} className="text-center px-4 mt-5">
          <h3 className="detalle-producto text-start">Detalle del producto</h3>
          <p className="plan-description mt-1 text-start">
            {producto.descripcion}
          </p>
          <div className="text-end">
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
