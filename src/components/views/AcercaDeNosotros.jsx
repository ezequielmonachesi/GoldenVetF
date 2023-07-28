import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./sobreNosotros.css";
import imagenPrincipal from "../../assets/sobreNosotros.jpg";
import { Link } from "react-router-dom";

const AcercaDeNosotros = () => {
  return (
    <>
      <Container fluid>
        {/* paradax */}
        <Row>
          <div className="bgimg-1">
            <div className="caption">
              <span>
                <h3 className="display-3">Queremos cuidar tu mascota</h3>
              </span>
            </div>
          </div>
        </Row>
        <Row className="my-5 py-5">
          <p>Nuestra misión</p>
          <h2>Cumplir tus expectativas</h2>
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
        <Row>
          <div className="bgimg-2">
            <div className="caption">
              <h2 className="display-2">Confía en nosotros</h2>
            </div>
          </div>
        </Row>
        <Row className="my-5 py-5 justify-content-start">
          <p>Nuestro equipo</p>
          <h2>Equipo Profesional</h2>
          <Col md={4} lg={3} className="mt-3">
            <Card className="border shadow rounded-4 card">
              <Card.Img
                variant="top"
                src="http://127.0.0.1:5500/img/EzeequielAvatarMaker.png"
                className="card-img-top"
              />
              <Card.Body className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                <Card.Title>Ezequiel Monahcesi</Card.Title>
                <Card.Text className="mt-2">
                  <div className="d-flex">
                    <a
                      className="text-decoration-none mx-1"
                      href="https://www.linkedin.com/in/c%C3%A9sar-ezequiel-monachesi-a95a38213/"
                      target="_blank"
                    >
                      <span className="circle">
                        <i class="bi bi-linkedin fs-5 iconColor"></i>
                      </span>
                    </a>
                    <a
                      className="text-decoration-none mx-1"
                      href="https://www.linkedin.com/in/c%C3%A9sar-ezequiel-monachesi-a95a38213/"
                      target="_blank"
                    >
                      <span className="circle">
                        <i class="bi bi-whatsapp fs-5 iconColor"></i>
                      </span>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} className="mt-3">
            <Card className="border shadow rounded-4 card">
              <Card.Img
                variant="top"
                src="http://127.0.0.1:5500/img/EzeequielAvatarMaker.png"
                className="card-img-top"
              />
              <Card.Body className="card-body d-flex flex-column justify-content-center align-items-center  text-center">
                <Card.Title>Ezequiel Monahcesi</Card.Title>
                <Card.Text className="mt-2">
                  <div className="d-flex">
                    <a
                      className="text-decoration-none mx-1"
                      href="https://www.linkedin.com/in/c%C3%A9sar-ezequiel-monachesi-a95a38213/"
                      target="_blank"
                    >
                      <span className="circle">
                        <i class="bi bi-linkedin fs-5 iconColor"></i>
                      </span>
                    </a>
                    <a
                      className="text-decoration-none mx-1"
                      href="https://www.linkedin.com/in/c%C3%A9sar-ezequiel-monachesi-a95a38213/"
                      target="_blank"
                    >
                      <span className="circle">
                        <i class="bi bi-whatsapp fs-5 iconColor"></i>
                      </span>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} className="mt-3">
            <Card className="border shadow rounded-4 card">
              <Card.Img
                variant="top"
                src="http://127.0.0.1:5500/img/EzeequielAvatarMaker.png"
                className="card-img-top"
              />
              <Card.Body className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                <Card.Title>Ezequiel Monahcesi</Card.Title>
                <Card.Text className="mt-2">
                  <div className="d-flex">
                    <a
                      className="text-decoration-none mx-1"
                      href="https://www.linkedin.com/in/c%C3%A9sar-ezequiel-monachesi-a95a38213/"
                      target="_blank"
                    >
                      <span className="circle">
                        <i class="bi bi-linkedin fs-5 iconColor"></i>
                      </span>
                    </a>
                    <a
                      className="text-decoration-none mx-1"
                      href="https://www.linkedin.com/in/c%C3%A9sar-ezequiel-monachesi-a95a38213/"
                      target="_blank"
                    >
                      <span className="circle">
                        <i class="bi bi-whatsapp fs-5 iconColor"></i>
                      </span>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} className="mt-3">
            <Card className="border shadow rounded-4 card">
              <Card.Img
                variant="top"
                src="http://127.0.0.1:5500/img/EzeequielAvatarMaker.png"
                className="card-img-top"
              />
              <Card.Body className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                <Card.Title>Ezequiel Monahcesi</Card.Title>
                <Card.Text className="mt-2">
                  <div className="d-flex">
                    <a
                      className="text-decoration-none mx-1"
                      href="https://www.linkedin.com/in/c%C3%A9sar-ezequiel-monachesi-a95a38213/"
                      target="_blank"
                    >
                      <span className="circle">
                        <i class="bi bi-linkedin fs-5 iconColor"></i>
                      </span>
                    </a>
                    <a
                      className="text-decoration-none mx-1"
                      href="https://www.linkedin.com/in/c%C3%A9sar-ezequiel-monachesi-a95a38213/"
                      target="_blank"
                    >
                      <span className="circle">
                        <i class="bi bi-whatsapp fs-5 iconColor"></i>
                      </span>
                    </a>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} lg={3} className="mt-3">
            <Card className="border shadow rounded-4 card">
              <Card.Img
                variant="top"
                src="http://127.0.0.1:5500/img/EzeequielAvatarMaker.png"
                className="card-img-top"
              />
              <Card.Body className="card-body d-flex flex-column justify-content-center align-items-center text-center">
                <Card.Title>Ezequiel Monahcesi</Card.Title>
                <Card.Text className="mt-2">
                  <div className="d-flex">
                    <a
                      className="text-decoration-none mx-1"
                      href="https://www.linkedin.com/in/c%C3%A9sar-ezequiel-monachesi-a95a38213/"
                      target="_blank"
                    >
                      <span className="circle">
                        <i class="bi bi-linkedin fs-5 iconColor"></i>
                      </span>
                    </a>
                    <a
                      className="text-decoration-none mx-1"
                      href="https://www.linkedin.com/in/c%C3%A9sar-ezequiel-monachesi-a95a38213/"
                      target="_blank"
                    >
                      <span className="circle">
                        <i class="bi bi-whatsapp fs-5 iconColor"></i>
                      </span>
                    </a>
                  </div>
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
