const URL_COMENTARIOS = import.meta.env.VITE_API_COMENTARIOS;

export const obtenerComentarios = async ()=>{
    try {
        const respuesta = await fetch(URL_COMENTARIOS);
        const listadoComentarios = await respuesta.json();
        return listadoComentarios;
    } catch (error) {
        console.log(error);
    }
};

export const obtenerComentario = async (id)=>{
    try{
        const respuesta = await fetch(URL_COMENTARIOS+'/'+id);
        const comentario = await respuesta.json();
        return comentario;
    }catch (error){
        console.log(error)
    }
}

export const crearComentario = async (comentario)=>{
    try{
        const respuesta = await fetch(URL_COMENTARIOS,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(comentario)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const borrarComentario = async (id)=>{
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario'))
    try{
        const respuesta = await fetch(URL_COMENTARIOS+'/'+id,{
            method: "DELETE",
            headers:{
            "Content-Type":"application/json",
            "x-token":usuarioLogueado.token
            }
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const editarComentario = async (comentario, id)=>{
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario'))
    try{
        const respuesta = await fetch(URL_COMENTARIOS+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "x-token":usuarioLogueado.token
            },
            body: JSON.stringify(comentario)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}