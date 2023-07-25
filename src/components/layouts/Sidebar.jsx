import React from "react";
import "../../css/Sidebar.css";
import SidebarData from "./sidebarData";




const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li className="fila"
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div className="icono">{val.icono}</div> <div className="titulo">{val.titulo}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
