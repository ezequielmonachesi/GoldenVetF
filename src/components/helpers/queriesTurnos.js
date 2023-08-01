const URL_TURNOS = import.meta.env.VITE_API_TURNOS;
const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario'));

export const obtenerTurnos = async ()=>{
    try {
        const respuesta = await fetch(URL_TURNOS,{
            method: "GET",
            headers: {
                "x-token": usuarioLogueado.token
            }
        });
        const listadoTurnos = await respuesta.json();
        return listadoTurnos;
    } catch (error) {
        console.log(error);
    }
};

export const obtenerTurno = async (id)=>{
    try{
        const respuesta = await fetch(URL_TURNOS+'/'+id);
        const turno = await respuesta.json();
        return turno;
    }catch (error){
        console.log(error)
    }
}

export const crearTurno = async (turno)=>{
    try{
        const respuesta = await fetch(URL_TURNOS,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(turno)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const borrarTurno = async (id)=>{
    try{
        const respuesta = await fetch(URL_TURNOS+'/'+id,{
            method: "DELETE"
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const editarTurno = async (turno, id)=>{
    try{
        const respuesta = await fetch(URL_TURNOS+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(turno)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}