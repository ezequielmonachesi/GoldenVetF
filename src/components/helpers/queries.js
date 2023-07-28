const queries = "queries";
const URL_USUARIOS = import.meta.env.VITE_API_USUARIOS;
const URL_SERVICIOS = import.meta.env.VITE_API_SERVICIOS;

export const registrarUsuarios = async (usuario) => {
  try {
    const respuesta = await fetch(URL_USUARIOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(usuario),
    });
    const data = await respuesta.json();
    return { status: respuesta.status, data };
  } catch (error) {
    console.log(error.mensaje);
  }
};

export const obtenerServicios = async ()=>{
    try {
        const respuesta = await fetch(URL_SERVICIOS);
        const listadoServicios = await respuesta.json();
        return listadoServicios;
    } catch (error) {
        console.log(error);
    }
};
