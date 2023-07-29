import "./Sidebar.css";
import SidebarData from "./SidebarData";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="Sidebar pt-5">
      <ul className="SidebarList">
        {SidebarData.map((val, key) => {
          return (
            <li>
              <NavLink
                key={key}
                to={val.link}
                id={({ isActive }) => (isActive ? "active" : "")}
                className="text-white fila"
              >
                <div className="icono">{val.icono}</div>
                <div className="titulos-sidebar fs-5">{val.titulo}</div>
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
