import React from "react";
import { Button, Container } from "react-bootstrap";
import "../../css/Administrador.css";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";

const Administrador = () => {
  function Example() {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <>
        <Button variant="dark" onClick={handleShow} className="sideBarButton">
          Launch
        </Button>

        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Bienvenido Admin!</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div className="sidebarButtons">
              <Button className="btn-dark">Turnos </Button>
              <Button className="btn-dark">Pacientes </Button>
              <Button className="btn-dark">Comentarios </Button>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  return (
    <section className="mainSection">
      <Container fluid className="h-100">
        <h1 className="my-4">Bienvenido Admin</h1>
        <div className="layout">
          <div className="sidebar h-100">
             {Example()}

          </div>
          <div className="body">
            <p className="w-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              cumque tenetur praesentium dolor, nam quisquam impedit adipisci
              facere deleniti id? Similique vel amet officia beatae ex ad,
              obcaecati dolore aliquam, consequuntur dicta provident voluptate
              sapiente quod atque repudiandae sequi cupiditate sed illo autem
              quasi dolores veniam illum at quae? Consequatur porro quo atque
              suscipit vitae soluta deserunt? Soluta in molestias ipsam tempore
              dolores vitae commodi id cupiditate nam, tempora, autem ullam
              animi accusamus amet voluptatibus laborum ducimus obcaecati fuga
              nobis quaerat nostrum ipsum. Architecto in incidunt unde
              voluptatem, corrupti inventore eaque ipsam tempore labore optio
              qui impedit esse! Ipsum, omnis.
            </p>
            <div className="w-100"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Administrador;
