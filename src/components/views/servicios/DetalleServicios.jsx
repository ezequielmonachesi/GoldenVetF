import React, { useEffect } from "react";
import "./DetallesServicios.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router";
import { obtenerUnServicio } from "../../helpers/queries";
import { useState } from "react";
const DetalleServicios = () => {

  const [servicio,setServicio]= useState({});
  const {id} = useParams();

  useEffect(()=>{
    obtenerUnServicio(id).then((respuesta)=>{
      setServicio(respuesta)
    })
  })

  return (
    <Container className="align-items-center">
      <Row className="m-1 grilla justify-content-center">
        <h1 className="text-center">{servicio.nombreServicio}</h1>
        <Col xs={12} md={6} lg={6} className="py-5 row">
          <Col xs={5} sm={6} lg={4} className="d-flex justify-content-end align-items-center">
            <Image className="imagen-subservicio" src="https://static.wixstatic.com/media/9c39c5_76379079b4e843bcbf072725c845e586.jpg/v1/fill/w_552,h_406,al_c,lg_1,q_80,enc_auto/9c39c5_76379079b4e843bcbf072725c845e586.jpg"
            ></Image>
          </Col>
          <Col
            xs={7}
            sm={6}
            className="d-flex flex-column align-items-left justify-content-end texto"
          >
            <h6 className="fw-bold">CORTE Y BAÑO COMPLETO</h6>
            <p className="text-black">              
              Incluye baño con shampoo natural, secado, corte a máquina y/o
              tijera, peinado, limpieza de oídos y corte de uñas.
            </p>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={6} className="py-5 row">
          <Col xs={5} sm={6} lg={4} className="d-flex justify-content-end align-items-center">
            <Image className="imagen-subservicio" src="https://static.wixstatic.com/media/9c39c5_76379079b4e843bcbf072725c845e586.jpg/v1/fill/w_552,h_406,al_c,lg_1,q_80,enc_auto/9c39c5_76379079b4e843bcbf072725c845e586.jpg"
            ></Image>
          </Col>
          <Col
            xs={7}
            sm={6}
            className="d-flex flex-column align-items-left justify-content-end texto"
          >
            <h6 className="fw-bold">CORTE Y BAÑO COMPLETO</h6>
            <p className="text-black">              
              Incluye baño con shampoo natural, secado, corte a máquina y/o
              tijera, peinado, limpieza de oídos y corte de uñas.
            </p>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={6} className="py-5 row">
          <Col xs={5} sm={6} lg={4} className="d-flex justify-content-end align-items-center">
            <Image className="imagen-subservicio" src="https://static.wixstatic.com/media/9c39c5_76379079b4e843bcbf072725c845e586.jpg/v1/fill/w_552,h_406,al_c,lg_1,q_80,enc_auto/9c39c5_76379079b4e843bcbf072725c845e586.jpg"
            ></Image>
          </Col>
          <Col
            xs={7}
            sm={6}
            className="d-flex flex-column align-items-left justify-content-end texto"
          >
            <h6 className="fw-bold">CORTE Y BAÑO COMPLETO</h6>
            <p className="text-black">              
              Incluye baño con shampoo natural, secado, corte a máquina y/o
              tijera, peinado, limpieza de oídos y corte de uñas.
            </p>
          </Col>
        </Col>
        <Col xs={12} md={6} lg={6} className="py-5 row">
          <Col xs={5} sm={6} lg={4} className="d-flex justify-content-end align-items-center">
            <Image className="imagen-subservicio" src="https://static.wixstatic.com/media/9c39c5_76379079b4e843bcbf072725c845e586.jpg/v1/fill/w_552,h_406,al_c,lg_1,q_80,enc_auto/9c39c5_76379079b4e843bcbf072725c845e586.jpg"
            ></Image>
          </Col>
          <Col
            xs={7}
            sm={6}
            className="d-flex flex-column align-items-left justify-content-end texto"
          >
            <h6 className="fw-bold">CORTE Y BAÑO COMPLETO</h6>
            <p className="text-black">              
              Incluye baño con shampoo natural, secado, corte a máquina y/o
              tijera, peinado, limpieza de oídos y corte de uñas.
            </p>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default DetalleServicios;
