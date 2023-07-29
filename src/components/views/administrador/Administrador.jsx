import React from "react";
import "./Administrador.css";
import Sidebar from "./Sidebar";

const Administrador = () => {
  return (
    <>
      <h1 className="my-4 mx-5">Bienvenido Admin(nombre de usuario) </h1>
    
      <div className="layout">
        <div className="sidebar-wrapper">
          <Sidebar></Sidebar>
        </div>
        <div className="body">
            {/* Aqui se colocan los componentes 
                administrador de turnos, pacientes y comentarios */}
            <div className="w-100"></div>
            </div>
      </div>
    
    </>
  );
};

export default Administrador;
