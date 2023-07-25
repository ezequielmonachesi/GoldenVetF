import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { ChatHeartFill, StarFill } from "react-bootstrap-icons";

const Inicio = () => {
  return (
    <section className="mainSection">
      {/* Formulario Testimonios */}
      <Container className="d-flex justify-content-center">
        <Col md={8}>
          <div className="border px-3 px-md-4 px-lg-5 mx-md-2 mx-lg-5 py-3 mt-5 rounded-3 shadow">
            <Row>
              {/* Titulo Formulario */}
              <Col xs={12}>
                <div className="d-flex flex-row justify-content-between align-items-center">
                  <h5>Envíanos tu comentario</h5>
                  <ChatHeartFill className="fs-2"></ChatHeartFill>
                </div>
              </Col>
              {/* Formulario */}
              <Col className="mt-3">
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>
                      <div className="d-flex align-items-center">
                        Puntuación
                      </div>
                    </Form.Label>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-3">
                        <Form.Check
                          inline
                          label={
                            <>
                              <StarFill></StarFill>
                            </>
                          }
                          name="estrellas"
                          type={type}
                          id={`inline-${type}-1`}
                        />
                        <Form.Check
                          inline
                          label={
                            <>
                              <StarFill></StarFill>
                              <StarFill></StarFill>
                            </>
                          }
                          name="estrellas"
                          type={type}
                          id={`inline-${type}-2`}
                        />
                        <Form.Check
                          inline
                          label={
                            <>
                              <StarFill></StarFill>
                              <StarFill></StarFill>
                              <StarFill></StarFill>
                            </>
                          }
                          name="estrellas"
                          type={type}
                          id={`inline-${type}-3`}
                        />
                        <Form.Check
                          inline
                          label={
                            <>
                              <StarFill></StarFill>
                              <StarFill></StarFill>
                              <StarFill></StarFill>
                              <StarFill></StarFill>
                            </>
                          }
                          name="estrellas"
                          type={type}
                          id={`inline-${type}-4`}
                        />
                        <Form.Check
                          inline
                          label={
                            <>
                              <StarFill></StarFill>
                              <StarFill></StarFill>
                              <StarFill></StarFill>
                              <StarFill></StarFill>
                              <StarFill></StarFill>
                            </>
                          }
                          name="estrellas"
                          type={type}
                          id={`inline-${type}-5`}
                        />
                      </div>
                    ))}
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Comentario</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <div className="text-end">
                    <Button
                      variant="dark"
                      type="submit"
                      className="width-button-responsive"
                    >
                      Enviar
                    </Button>
                  </div>
                </Form>
              </Col>
            </Row>
          </div>
        </Col>
      </Container>
    </section>
  );
};

export default Inicio;
