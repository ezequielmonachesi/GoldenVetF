import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./components/views/Registro";

import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./components/views/Inicio";
import Login from "./components/views/login/Login";
import Error404 from "./components/views/error404/Error404";
import Servicios from "./components/views/Servicios/Servicios";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
import DetalleServicios from "./components/views/servicios/DetalleServicios";



function App() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <>
      <BrowserRouter>
        <Menu/>
        <section className='mainSection'>
        <Routes>          
          <Route exact path="/" element={<Inicio></Inicio> }></Route>
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route exact path="/registro" element={<Registro/>}></Route>
          <Route exact path="/servicios" element={<Servicios/>}></Route>
          <Route exact path="/servicios/:id" element={<DetalleServicios/>}></Route>
          <Route path="*" element={<Error404></Error404>}></Route>
          <Route path="/sobre-nosotros" element={<AcercaDeNosotros></AcercaDeNosotros>}></Route>
        </Routes>
          </section>
        <Footer/>

      </BrowserRouter>
    </>
  );
}

export default App;
