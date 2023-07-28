const queries = "queries";
const URL_PRODUCTOS = import.meta.env.VITE_API_PRODUCTOS
const URL_SERVICIOS = import.meta.env.VITE_API_SERVICIOS;

export const obtenerProductos = async() =>{
    const respuesta = await fetch(URL_PRODUCTOS)
    const data = await respuesta.json()
    return data
}

export const obtenerServicios = async ()=>{
    try {
        const respuesta = await fetch(URL_SERVICIOS);
        const listadoServicios = await respuesta.json();
        return listadoServicios;
    } catch (error) {
        console.log(error);
    }
};
