const URL_USUARIOS = import.meta.env.VITE_API_USUARIOS;

export const obtenerUsuarios = async ()=>{
    try {
        const respuesta = await fetch(URL_USUARIOS);
        const listadoUsuarios = await respuesta.json();
        return listadoUsuarios;
    } catch (error) {
        console.log(error);
    }
};

export const obtenerUsuario = async (id)=>{
    try{
        const respuesta = await fetch(URL_USUARIOS+'/'+id);
        const usuario = await respuesta.json();
        return usuario;
    }catch (error){
        console.log(error)
    }
}

export const crearUsuario = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_USUARIOS,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const borrarUsuario= async (id)=>{
    try{
        const respuesta = await fetch(URL_USUARIOS+'/'+id,{
            method: "DELETE"
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const editarUsuario = async (usuario, id)=>{
    try{
        const respuesta = await fetch(URL_USUARIOS+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}