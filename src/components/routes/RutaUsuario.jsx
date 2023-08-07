import { Routes, Route } from "react-router-dom";
import Usuario from "../views/usuario/Usuario";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Usuario/>}/>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
