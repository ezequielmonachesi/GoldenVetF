import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./sobreNosotros.css";
import silvior from "../../assets/silvior.jpg";
import ezequielm from "../../assets/ezequiel.jpeg";
import diegom from "../../assets/diego.jpg";
import nahuel from "../../assets/nahuel.jpeg";
import facundo from "../../assets/facundo.jpeg";

const AcercaDeNosotros = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <div className="bgimg-1">
            <div className="caption">
              <span>
                <h3 className="display-3">Queremos cuidar de tu mascota</h3>
              </span>
            </div>
          </div>
        </Row>
        <Row className="justify-content-center my-5">
          <Col
            className="px-5 py-4 my-5 border rounded-3 shadow bg-white"
            xs={11}
            md={9}
          >
            <h5 className="text-center display-5">Acerca de Nosotros</h5>
            <hr />
            <p className="lead text-descripcion">
              En nuestra clínica veterinaria, no solo somos amantes apasionados
              de los animales, sino también dedicados programadores que hemos
              fusionado nuestra pasión por la tecnología con nuestro profundo
              amor por los seres peludos que comparten nuestras vidas. Nos
              enorgullecemos de presentarles un equipo que no solo ofrece
              cuidados excepcionales a las mascotas, sino que también abraza la
              innovación y la tecnología para mejorar la salud y el bienestar
              animal.
            </p>
          </Col>
        </Row>
        <Row>
          <div className="bgimg-2">
            <div className="caption">
              <h2 className="display-2">Confiá en nosotros</h2>
            </div>
          </div>
        </Row>
        <div className="bg-white rounded-3 shadow border mx-md-5 my-5 px-4">
          <Row className="my-3 px-md-4 py-4 justify-content-center">
            <h5 className="text-center display-5 mb-4">Nuestro Equipo</h5>
            <hr />
            <Col md={4} lg={4} className="mt-3">
              <Card className="border shadow rounded-4 tarjeta">
                <Card.Img
                  variant="top"
                  src={silvior}
                  className="tarjeta-img-top"
                />
                <Card.Body className="tarjeta-body d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="mb-5">
                    <h5 className="lead fs-2">Ruiz Silvio</h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="d-flex">
                      <a
                        className="text-decoration-none mx-1"
                        href="https://www.linkedin.com/in/silvioruiz/"
                        target="_blank"
                      >
                        <span className="circle">
                          <i class="bi bi-linkedin fs-5 iconColor"></i>
                        </span>
                      </a>
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/silviojrcc"
                        target="_blank"
                      >
                        <span className="circle">
                          <i class="bi bi-github fs-5 iconColor"></i>
                        </span>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4} className="mt-3">
              <Card className="border shadow rounded-4 tarjeta">
                <Card.Img
                  variant="top"
                  src={ezequielm}
                  className="tarjeta-img-top"
                />
                <Card.Body className="tarjeta-body d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="mb-5">
                    <h5 className="lead fs-2">Monachesi Ezequiel</h5>
                  </Card.Title>
                  <Card.Text>
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
                        href="https://github.com/ezequielmonachesi"
                        target="_blank"
                      >
                        <span className="circle">
                          <i class="bi bi-github fs-5 iconColor"></i>
                        </span>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4} className="mt-3">
              <Card className="border shadow rounded-4 tarjeta">
                <Card.Img
                  variant="top"
                  src={nahuel}
                  className="tarjeta-img-top"
                />
                <Card.Body className="tarjeta-body d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="mb-5">
                    <h5 className="lead fs-2">Rodriguez Nahuel</h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="d-flex">
                      <a
                        className="text-decoration-none mx-1"
                        href="https://www.linkedin.com/in/rodrigueznahuelfederico/"
                        target="_blank"
                      >
                        <span className="circle">
                          <i class="bi bi-linkedin fs-5 iconColor"></i>
                        </span>
                      </a>
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/NahuFed"
                        target="_blank"
                      >
                        <span className="circle">
                          <i class="bi bi-github fs-5 iconColor"></i>
                        </span>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4} className="mt-3 mt-md-5">
              <Card className="border shadow rounded-4 tarjeta">
                <Card.Img
                  variant="top"
                  src={diegom}
                  className="tarjeta-img-top"
                />
                <Card.Body className="tarjeta-body d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="mb-5">
                    <h5 className="lead fs-2">Mercado Diego</h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="d-flex">
                      <a
                        className="text-decoration-none mx-1"
                        href="https://www.linkedin.com/in/fdmercado/"
                        target="_blank"
                      >
                        <span className="circle">
                          <i class="bi bi-linkedin fs-5 iconColor"></i>
                        </span>
                      </a>
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/Diego2997"
                        target="_blank"
                      >
                        <span className="circle">
                          <i class="bi bi-github fs-5 iconColor"></i>
                        </span>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} lg={4} className="mt-3 mt-md-5">
              <Card className="border shadow rounded-4 tarjeta">
                <Card.Img
                  variant="top"
                  src={facundo}
                  className="tarjeta-img-top"
                />
                <Card.Body className="tarjeta-body d-flex flex-column justify-content-center align-items-center text-center">
                  <Card.Title className="mb-5">
                    <h5 className="lead fs-2">Carabajal Facundo</h5>
                  </Card.Title>
                  <Card.Text>
                    <div className="d-flex">
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/carabajal-facundo/"
                        target="_blank"
                      >
                        <span className="circle">
                          <i class="bi bi-linkedin fs-5 iconColor"></i>
                        </span>
                      </a>
                      <a
                        className="text-decoration-none mx-1"
                        href="https://github.com/carabajal-facundo/"
                        target="_blank"
                      >
                        <span className="circle">
                          <i class="bi bi-github fs-5 iconColor"></i>
                        </span>
                      </a>
                    </div>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
        <Row>
          <div className="bgimg-3">
            <div className="caption">
              <h2 className="display-2">Golden Vet</h2>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default AcercaDeNosotros;
