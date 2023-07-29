import React from "react";
import "./Sidebar.css";
import SidebarData from "./SidebarData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar pt-5">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li key={key}>
             <Link
                to={val.link}
                className={window.location.pathname === val.link ? "active text-white fila" : "text-white fila"}
              >
                <div className="icono">{val.icono}</div>
                <div className="titulos-sidebar fs-5">{val.titulo}</div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
