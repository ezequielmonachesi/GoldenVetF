const queries = "queries";
const URL_USUARIOS = import.meta.env.VITE_API_USUARIOS

export const registrarUsuarios = async(usuario) =>{
    try {
        const respuesta = await fetch(URL_USUARIOS,{
            method:"POST",
            headers:{
            "Content-Type":"application/json"
            },
            body:JSON.stringify(usuario)
            })
            const data = await respuesta.json()
            return {status:respuesta.status,data}
    } catch (error) {
        console.log(error.mensaje)
    }
}