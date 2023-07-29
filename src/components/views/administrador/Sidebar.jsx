import React from "react";
import "./Sidebar.css";
import SidebarData from "./SidebarData";

const Sidebar = () => {
  return (
    <div className="Sidebar pt-5">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li
              className="fila"
              id={window.location.pathname == val.link ? "active" : ""}
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div className="icono ">{val.icono}</div>{" "}
              <div className="titulos-sidebar fs-5 ">{val.titulo}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
