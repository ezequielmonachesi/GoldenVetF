import "./Administrador.css";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Pacientes from "./pacientes/Pacientes";
import Comentarios from "./comentarios/Comentarios";
import Productos from "./producto/Productos";
import Servicios from "./servicios/Servicios";
import Usuarios from "./usuarios/Usuarios";
import Turnos from "./turnos/Turnos";
import { Col, Row } from "react-bootstrap";

const Administrador = () => {
  const usuario = JSON.parse(sessionStorage.getItem("usuario"));
  return (
    <>
      <h1 className="my-4 mx-5">Bienvenido {usuario? usuario.nombreUsuario : "Usuario"} </h1>
      
      <Row className="layout gx-0">
        <Col xs={2} className="sidebar-wrapper ">
          <Sidebar></Sidebar>
        </Col>
        <Col xs={10} className="body-admin p-3">
          <Routes>
            <Route
              path="comentarios"
              element={<Comentarios></Comentarios>}
            ></Route>
            <Route path="/pacientes" element={<Pacientes></Pacientes>}></Route>
            <Route path="/productos" element={<Productos></Productos>}></Route>
            <Route path="/servicios" element={<Servicios></Servicios>}></Route>
            <Route path="/turnos" element={<Turnos></Turnos>}></Route>
            <Route path="/usuarios" element={<Usuarios></Usuarios>}></Route>
          </Routes>          
        </Col>
      </Row>
    </>
  );
};

export default Administrador;