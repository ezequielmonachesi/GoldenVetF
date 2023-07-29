const URL_PRODUCTOS = import.meta.env.VITE_API_PRODUCTOS;

export const obtenerProductos = async ()=>{
    try {
        const respuesta = await fetch(URL_PRODUCTOS);
        const listadoProductos = await respuesta.json();
        return listadoProductos;
    } catch (error) {
        console.log(error);
    }
};

export const obtenerProducto = async (id)=>{
    try{
        const respuesta = await fetch(URL_PRODUCTOS+'/'+id);
        const producto = await respuesta.json();
        return producto;
    }catch (error){
        console.log(error)
    }
}

export const crearProducto = async (producto)=>{
    try{
        const respuesta = await fetch(URL_PRODUCTOS,{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const borrarProducto = async (id)=>{
    try{
        const respuesta = await fetch(URL_PRODUCTOS+'/'+id,{
            method: "DELETE"
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const editarProducto = async (producto, id)=>{
    try{
        const respuesta = await fetch(URL_PRODUCTOS+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}