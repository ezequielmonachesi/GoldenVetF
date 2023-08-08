const URL_USUARIOS = import.meta.env.VITE_API_USUARIOS;
const URL_LOGIN = import.meta.env.VITE_API_BASE;

export const login = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_LOGIN,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario)
        });

        const usuarioLogueado = await respuesta.json();
        return usuarioLogueado
       
    }catch(error){
        console.log(error)
    }
}
    
export const obtenerUsuarios = async ()=>{
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario'));
    try {
        const respuesta = await fetch(URL_USUARIOS,{
            method: "GET",
            headers: {
                "x-token": usuarioLogueado.token
            }
        });
        const listadoUsuarios = await respuesta.json();
        return listadoUsuarios;
    } catch (error) {
        console.log(error);
    }
};

export const obtenerUsuario = async (id)=>{
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario'));
    try{
        const respuesta = await fetch(URL_USUARIOS+'/'+id,{
            method: "GET",
            headers: {
                "x-token": usuarioLogueado.token
            }
        });
        const usuario = await respuesta.json();
        return usuario;
    }catch (error){
        console.log(error)
    }
}

export const crearUsuario = async (usuario) => {
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario'));
    if (usuarioLogueado.token && usuarioLogueado?.rol == "administrador") {
        try {
            const respuesta = await fetch(URL_USUARIOS, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-token": usuarioLogueado.token
                },
                body: JSON.stringify(usuario),
            });
            const data = await respuesta.json();
            return { status: respuesta.status, data };
        } catch (error) {
            console.log(error.mensaje);
        }
    }

    try {
        const respuesta = await fetch(URL_USUARIOS, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(usuario),
        });
        const data = await respuesta.json();
        return { status: respuesta.status, data };
    } catch (error) {
        console.log(error.mensaje);
    }
    
};

export const borrarUsuario= async (id)=>{
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario'));
    try{
        const respuesta = await fetch(URL_USUARIOS+'/'+id,{
            method: "DELETE",
            headers: {
                "x-token": usuarioLogueado.token
            }
        });
        return respuesta;
    }catch (error){
        console.log(error)
    }
}

export const editarUsuario = async (usuario, id)=>{
    const usuarioLogueado = JSON.parse(sessionStorage.getItem('usuario'));
    try{
        const respuesta = await fetch(URL_USUARIOS+'/'+id,{
            method: "PUT",
            headers: {
                "Content-Type":"application/json",
                "x-token": usuarioLogueado.token
            },
            body: JSON.stringify(usuario)
        });
        const data = await respuesta.json();
        return { status: respuesta.status, data };
    }catch (error){
        console.log(error)
    }
}
