import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const CardProducto = () => {
  return (
    <Col md={6} lg={3} xs={12} className="mb-1">
      <Card className="shadow-lg p-3 mb-3 bg-body-tertiary rounded">
        <Card.Header className="p-0">
          <Card.Img
            className="img-productos w-100"
            src="https://nanolog.vtexassets.com/arquivos/ids/165009-800-800?v=637376716541070000&width=800&height=800&aspect=true"
          ></Card.Img>
        </Card.Header>
        <Card.Body>
          <Card.Title className="text-center">Card Title</Card.Title>
          <Card.Text className="limite-texto text-center">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
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
