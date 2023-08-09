import { Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { Cart4, Eye } from "react-bootstrap-icons";

const CardProducto = ({ producto }) => {
  return (
    <Col md={6} lg={3} xs={12} className="mb-1">
      <Card className="shadow p-3 mb-3 bg-body-tertiary rounded h-100">
        <Card.Img
          className="img-productos w-100 rounded"
          src={producto.imagen}
        ></Card.Img>
        <Card.Body>
          <Card.Title className="text-center">
            {producto.nombreProducto}
          </Card.Title>
        </Card.Body>
        <p className="limite-texto text-center fw-bold h4">$ {producto.precio}</p>
        <div className="text-center d-flex justify-content-around justify-content-center">
          <Link
            to={"/error404"}
            onClick={() => window.scrollTo(0, 0)}
            className="btn btn-dorado fw-semibold rounded-pill"
          >
            <Cart4 className="mb-1" /> Comprar
          </Link>
          <Link
            to={"/productos/" + producto.id}
            onClick={() => window.scrollTo(0, 0)}
            className="btn fw-semibold rounded-pill"
          >
            <Eye className="mb-1" /> Ver más
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default CardProducto;
