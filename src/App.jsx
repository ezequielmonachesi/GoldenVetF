import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./components/views/Inicio";
import Login from "./components/views/login/Login";
import Error404 from "./components/views/error404/Error404";
import Servicios from "./components/views/Servicios/Servicios";
import Menu from "./components/common/Menu";
import Footer from "./components/common/Footer";
import Productos from './components/views/Productos'
import AcercaDeNosotros from "./components/views/AcercaDeNosotros";
import DetalleServicios from "./components/views/servicios/DetalleServicios";
import DetalleProducto from './components/views/DetalleProducto'
import Planes from "./components/shared/Inicio/Planes";
import RutaUsuario from "./components/routes/RutaUsuario";
import Registro from "./components/views/Registro";
import DetallePlan from "./components/views/detallePlan/DetallePlan";
import PlanesVista from "./components/views/PlanesVista";
import Contacto from "./components/views/contacto/Contacto";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutaAdministrador from "./components/routes/RutaAdministrador";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {};
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  useEffect(() => {
    sessionStorage.setItem('usuario', JSON.stringify(usuarioLogueado));
  }, [usuarioLogueado]);

  return (
    <>

      <BrowserRouter>
        <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado} />
        <section className='mainSection'>
        <Routes>          
          <Route exact path="/" element={<Inicio></Inicio> }></Route>
          <Route exact path="/login" element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route exact path="/registro" element={<Registro/>}></Route>
          <Route exact path="/servicios" element={<Servicios/>}></Route>
          <Route exact path="/servicios/:id" element={<DetalleServicios/>}></Route>
          <Route exact path="/planes" element={<PlanesVista/>}></Route>
          <Route exact path="/productos" element={<Productos/>}></Route>
          <Route exact path="/productos/:id" element={<DetalleProducto/>}></Route>
          <Route exact path="/planes" element={<Planes/>}></Route>
          <Route exact path="/planes/:id" element={<DetallePlan/>}></Route>
          <Route path="/admin/*" element={
          <RutasProtegidas>
            <RutaAdministrador/>
          </RutasProtegidas>} />
          <Route path="/usuario/*" element={
          <RutasProtegidas>
            <RutaUsuario usuarioLogueado={usuarioLogueado}/>
          </RutasProtegidas>
          } />
          <Route path="*" element={<Error404></Error404>}></Route>
          <Route path="/sobre-nosotros" element={<AcercaDeNosotros></AcercaDeNosotros>}></Route>
          <Route path="/contacto" element={<Contacto></Contacto>}></Route>
        </Routes>
          </section>
        <Footer/>

      </BrowserRouter>

    </>
  );
}

export default App;
