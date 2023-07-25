import React from "react";
import "../../css/Sidebar.css";
import SidebarData from "./sidebarData";




const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        {SidebarData.map((val, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                window.location.pathname = val.link;
              }}
            >
              {" "}
              <div>{val.icono}</div> <div>{val.titulo}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
