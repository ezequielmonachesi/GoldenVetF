import { useState } from "react";
import { Card, Col } from "react-bootstrap";
import "./Servicios.css";
import { Link } from "react-router-dom";
const CardServicio = ({ descripcion, nombreServicio, imagen, id }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col
        md={4}
        ld={3}
        as={Link}
        to={"/servicios/" + id}
        className="mb-3 position-relative col-servicios"
      >
        <Card
          className="bg-card-servicio"
          onMouseEnter={handleShow}
          onMouseLeave={handleClose}
        >
          <Card.Img src={imagen} placeholder={nombreServicio} />
          <Card.Body>
            <Card.Title>{nombreServicio}</Card.Title>
            <div className={`description ${show ? "active" : ""}`}>
              {descripcion}
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardServicio;
