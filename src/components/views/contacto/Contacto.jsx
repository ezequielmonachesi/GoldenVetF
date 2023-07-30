import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import emailjs from 'emailjs-com'
import Swal from "sweetalert2";
import './contacto.css'
 

const Contacto = () => {

    function enviarEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_hvmsxxs','template_iwyhz5o',e.target,'yZZ-NX-fStDQ5repd').then(res=>{
            Swal.fire(
                "Mensaje enviado",
                "Se ha enviado el mensaje exitosamente! Nos comunicaremos a la brevedad",
                "success"
            );
            console.log(res)
        })
    }

  return (
    <div className="form-area">
    <div className="container p-5 shadow bg-white rounded my-5">
        <Row className="single-form g-0">
        <Col  lg={6}>
            <div className="izquierda-contacto">
            <h2><span>Contáctanos para</span><br/>consultas comerciales.</h2> 
            </div>
            </Col>
        <Col lg={6}>
            <div className="derecha-contacto">
              <i className="bi bi-caret-left-fill"></i>  
    <Form onSubmit={enviarEmail} className="formularioContacto">
      <Form.Group className="mb-3" controlId="formularioContacto.ControlInput1">
        <Form.Label>Correo electrónico</Form.Label>
        <Form.Control type="email" placeholder="nombre@mail.com" id="email" name="email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formularioContacto.ControlInput2">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Juan Diaz" required id="nombre" name="nombre"/>
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId="formularioContacto.ControlTextarea1"        
      >
        <Form.Label>Mensaje</Form.Label>
        <Form.Control as="textarea" rows={5} required minLength={10} id="mensaje" name="mensaje"/>
      </Form.Group>
      <Button type="submit" variant="success border-3 shadow fs-3"> Enviar</Button>
    </Form>            
            </div>
        </Col>
        </Row>   
    </div>
    </div>
  );
};

export default Contacto;
