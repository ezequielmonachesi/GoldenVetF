import { Routes, Route } from "react-router-dom";
import Usuario from "../views/usuario/Usuario";

const RutaUsuario = (usuarioLogueado) => {
  return (
    <>
      <Routes>
        <Route exact path="/:id" element={<Usuario usuarioLogueado={usuarioLogueado}/>}/>
      </Routes>
    </>
  );
};

export default RutaUsuario;
