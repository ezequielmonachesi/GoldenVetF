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
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    try{
        const respuesta = await fetch(URL_PRODUCTOS,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
                "x-token": usuario.token
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const borrarProducto = async (id)=>{
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    try{
        const respuesta = await fetch(URL_PRODUCTOS+'/'+id,{
            method: "DELETE",
            headers: {
                "x-token": usuario.token
            }
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const editarProducto = async (producto, id)=>{
    const usuario = JSON.parse(sessionStorage.getItem('usuario'));
    try{
        const respuesta = await fetch(URL_PRODUCTOS+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "x-token": usuario.token
            },
            body: JSON.stringify(producto)
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}