import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./sobreNosotros.css";

const AcercaDeNosotros = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h2>Queremos cuidar tu mascota</h2>
            <ul className="list-unstyled">
              <li>Somos Responsables.</li>
              <li>Buscamos la mejor opción.</li>
              <li>Productos de calidad.</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="">
          <div className="img-acercaDeNostros border rounded-3 shadow"></div>
        </div>
        <Row>
          <Col>Somos nosotros</Col>
          <Col>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde
            tempore, harum voluptates nobis quas illum exercitationem deserunt
            inventore temporibus consectetur, corporis ullam at voluptate
            eveniet vel cupiditate tempora, aspernatur ex facere cumque velit.
            Maxime rem dolorem sint, doloremque voluptatum suscipit fuga
            praesentium enim, error quisquam excepturi quo nulla ex architecto!
          </Col>
        </Row>
        <Row className="mt-3">
          <p>Nuestra misión</p>
          <h2>Equipo Profesional</h2>
          <Col md={4} className="mt-3">
            <Card className="border shadow rounded-4">
              <Card.Body>
                <div className="pb-3">
                  <i class="bi bi-bookmark-star-fill fs-2 color"></i>
                </div>
                <Card.Title>Enfoque Personal</Card.Title>
                <Card.Text>
                  Vas a contar con una atención personalizada con nuestro
                  equipo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mt-3">
            <Card className="border shadow rounded-4">
              <Card.Body>
                <div className="pb-3">
                  <i class="bi bi-bookmark-star-fill fs-2 color"></i>
                </div>
                <Card.Title>Enfoque Personal</Card.Title>
                <Card.Text>
                  Vas a contar con una atención personalizada con nuestro
                  equipo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mt-3">
            <Card className="border shadow rounded-4">
              <Card.Body>
                <div className="pb-3">
                  <i class="bi bi-bookmark-star-fill fs-2 color"></i>
                </div>
                <Card.Title>Enfoque Personal</Card.Title>
                <Card.Text>
                  Vas a contar con una atención personalizada con nuestro
                  equipo.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AcercaDeNosotros;
