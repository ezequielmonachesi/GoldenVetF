const URL_SERVICIOS = import.meta.env.VITE_API_SERVICIOS;

export const obtenerServicios = async ()=>{
    console.log("entre en obtener servicios");
    try {
        const respuesta = await fetch(URL_SERVICIOS);
        const listadoServicios = await respuesta.json();
        return listadoServicios;
    } catch (error) {
        console.log(error);
    }
};

export const obtenerServicio = async (id)=>{
    try{
        const respuesta = await fetch(URL_SERVICIOS+'/'+id);
        const servicio = await respuesta.json();
        return servicio;
    }catch (error){
        console.log(error)
    }
}

export const crearServicio = async (servicio)=>{
    try{
        const respuesta = await fetch(URL_SERVICIOS,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(servicio)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const borrarServicio = async (id)=>{
    try{
        const respuesta = await fetch(URL_SERVICIOS+'/'+id,{
            method: "DELETE"
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const editarServicio = async (servicio, id)=>{
    try{
        const respuesta = await fetch(URL_SERVICIOS+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(servicio)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}