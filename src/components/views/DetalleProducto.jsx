import React from "react";
import { Badge, Col, Container, Image, Row } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container>
      <Row className="justify-content-center text-center text-md-start border shadow mt-5 rounded-3 mx-2">
        <Col sm={6}>
          <div>
            <Image src="https://nanolog.vtexassets.com/arquivos/ids/165009-800-800?v=637376716541070000&width=800&height=800&aspect=true" fluid></Image>
          </div>
        </Col>
        <Col sm={4} className="py-5">
          <h2>Pro Plan Adult Dog Raza Mediana BONUS BAG</h2>
          <p>$ 22.760,00</p>
          <Badge bg="danger" className="px-2 py-2">1 Cuota Sin Interés</Badge>
          <p>Stock: 5</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleProducto;
