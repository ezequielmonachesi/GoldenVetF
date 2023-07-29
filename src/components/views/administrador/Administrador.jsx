import "./Administrador.css";
import Sidebar from "./Sidebar";
import { Routes, Route } from "react-router-dom";
import Pacientes from "./pacientes/Pacientes";
import Comentarios from "./comentarios/Comentarios";
import Productos from "./productos/Productos";
import Servicios from "./servicios/Servicios";
import Usuarios from "./usuarios/Usuarios";
import Turnos from "./turnos/Turnos";

const Administrador = () => {
  return (
    <>
      <h1 className="my-4 mx-5">Bienvenido Admin(nombre de usuario) </h1>

      <div className="layout">
        <div className="sidebar-wrapper">
          <Sidebar></Sidebar>
        </div>
        <div className="body-admin">
          <Routes>
            <Route
              path="comentarios/*"
              element={<Comentarios></Comentarios>}
            ></Route>
            <Route path="pacientes/*" element={<Pacientes></Pacientes>}></Route>
            <Route path="productos/*" element={<Productos></Productos>}></Route>
            <Route path="servicios/*" element={<Servicios></Servicios>}></Route>
            <Route path="turnos/*" element={<Turnos></Turnos>}></Route>
            <Route path="usuarios/*" element={<Usuarios></Usuarios>}></Route>
          </Routes>

          <div className="w-100"></div>
        </div>
      </div>
    </>
  );
};

export default Administrador;
