import React from "react";
import "../../css/Administrador.css";
import Sidebar from "../layouts/Sidebar";

const Administrador = () => {
  return (
    <>
      <section className="mainSection">
        <h1 className="my-4 mx-5">Bienvenido Admin(nombre de usuario) </h1>

        <div className="layout h-100">
          <div className="sidebar-wrapper">
            <Sidebar></Sidebar>
          </div>

          <div className="body">
            {/* Aqui se colocan los componentes 
                administrador de turnos, pacientes y comentarios */}
            <div className="w-100"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Administrador;
