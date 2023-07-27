const queries = "queries";
const URL_PRODUCTOS = import.meta.env.VITE_API_PRODUCTOS

export const obtenerProductos = async() =>{
    const respuesta = await fetch(URL_PRODUCTOS)
    const data = await respuesta.json()
    return data
}