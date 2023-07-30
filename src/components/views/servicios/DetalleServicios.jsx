import React, { useEffect } from "react";
import "./DetallesServicios.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useParams } from "react-router";
import { obtenerUnServicio } from "../../helpers/queriesServicios";
import { useState } from "react";
const DetalleServicios = () => {

  const [servicio,setServicio]= useState({});
  const {id} = useParams();

  useEffect(()=>{
    obtenerUnServicio(id).then((respuesta)=>{
      setServicio(respuesta)
    })
  },[])

  return (
    <Container className="align-items-center container-detalles-servicio">
      <Row className="m-1 grilla-detalle-servicio justify-content-center">
        <h1 className="text-center titulo-detalle-servicio">{servicio.nombreServicio}</h1>
    <p>{servicio.descripcion}</p>
    <h2 className="text-center">Servicios</h2>
       {servicio.subservicios && servicio.subservicios.map((subservicio,index) =>(
                <Col key={index} xs={12} md={6} lg={6} className="py-5 row">
                <Col xs={5} sm={6} lg={4} className="d-flex justify-content-end align-items-center">
                  <Image className="imagen-subservicio" src={subservicio.imagenSubservicio}
                  ></Image>
                </Col>
                <Col
                  xs={7}
                  sm={6}
                  className="d-flex flex-column align-items-left justify-content-end texto-detalle-servicio"
                >
                  <h6 className="fw-bold">{subservicio.nombreSubservicio}</h6>
                  <p className="text-black">              
                    {subservicio.descripcionSubservicio}
                  </p>
                </Col>
              </Col>

       ))
       }



      </Row>
    </Container>
  );
};

export default DetalleServicios;
