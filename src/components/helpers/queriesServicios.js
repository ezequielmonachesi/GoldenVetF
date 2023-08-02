const URL_SERVICIOS = import.meta.env.VITE_API_SERVICIOS;

const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario"));

export const obtenerServicios = async () => {
  try {
    const respuesta = await fetch(URL_SERVICIOS);
    const listadoServicios = await respuesta.json();
    return listadoServicios;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerUnServicio = async (id) => {
  try {
    const respuesta = await fetch(URL_SERVICIOS + "/" + id);
    const servicio = await respuesta.json();
    return servicio;
  } catch (error) {
    console.log(error);
  }
};

export const crearServicio = async (servicio) => {
  try {
    const respuesta = await fetch(URL_SERVICIOS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",        
          "x-token": usuarioLogueado.token,
        },      
      body: JSON.stringify(servicio),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const borrarServicio = async (id) => {
  try {
    const respuesta = await fetch(URL_SERVICIOS + "/" + id, {
      method: "DELETE",
      headers: {
        "x-token": usuarioLogueado.token,
      },
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarServicio = async (servicio, id) => {
  try {
    const respuesta = await fetch(URL_SERVICIOS + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-token": usuarioLogueado.token,
      },
      body: JSON.stringify(servicio),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
