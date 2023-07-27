const URL_SERVICIOS = import.meta.env.VITE_API_SERVICIOS;

export const obtenerServicios = async ()=>{
    try {
        const respuesta = await fetch(URL_SERVICIOS);
        const listadoServicios = await respuesta.json();
        return listadoServicios;
    } catch (error) {
        console.log(error);
    }
};

export const obtenerUnServicio = async (id)=>{
    try{
        const respuesta = await fetch(URL_SERVICIOS+'/'+id);
        const servicio = await respuesta.json();
        return servicio;
    }catch (error){
        console.log(error)
    }
}