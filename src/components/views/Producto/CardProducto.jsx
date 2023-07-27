import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const CardProducto = ({ producto }) => {
  return (
    <Col md={6} lg={3} xs={12} className="mb-1">
      <Card className="shadow-lg p-3 mb-3 bg-body-tertiary rounded">
        <Card.Header className="p-0">
          <Card.Img
            className="img-productos w-100"
            src={producto.imagen}
          ></Card.Img>
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center">
            {producto.nombreProducto}
          </Card.Title>
          <Card.Text className="limite-texto text-center">
            {producto.descripcion}
          </Card.Text>
        </Card.Body>
        <div className="text-center">
          <button className="boton-verMas-producto fw-semibold rounded">
            Ver más
          </button>
        </div>
      </Card>
    </Col>
  );
};

export default CardProducto;
