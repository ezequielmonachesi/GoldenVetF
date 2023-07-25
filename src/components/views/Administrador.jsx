import React from "react";
import { Button, Container } from "react-bootstrap";
import "../../css/Administrador.css"

const Administrador = () => {
  return (
    <section className="mainSection">
      <Container fluid className="layout">
        <div className="sidebar">
          <h1 className="text-left">Bienvenido Admin! 🐶</h1>
          <div className="sidebarButtons">

          <Button className="p-4 fs-2">Turnos </Button>
          <Button>Pacientes </Button>
          <Button>Comentarios </Button>
          </div>
        </div>
        <div className="body">
            este es el cuerpo de la pagina de admin
        </div>
      </Container>
    </section>
  );
};

export default Administrador;
