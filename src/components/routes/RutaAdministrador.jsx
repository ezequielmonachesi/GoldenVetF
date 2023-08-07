import { Routes, Route } from "react-router-dom";
import Administrador from "../views/administrador/Administrador";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<Administrador />} />
      </Routes>
    </>
  );
};

export default RutasAdministrador;
