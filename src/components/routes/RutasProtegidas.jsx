import { Navigate } from "react-router-dom";

const RutasProtegidas = ({children}) => {
   const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario')) || null;
   if(!usuarioLogueado || !usuarioLogueado.nombreUsuario){
    return <Navigate to={'/login'}></Navigate>
   }else{
    return children;
   }
};

export default RutasProtegidas;