const URL_PACIENTES = import.meta.env.VITE_API_PACIENTES;

const usuarioLogueado = JSON.parse(sessionStorage.getItem("usuario"));

export const obtenerPacientes = async () => {
  try {
    const respuesta = await fetch(URL_PACIENTES, {
      method: "GET",
      headers: {
        "x-token": usuarioLogueado.token,
      },
    });
    const paciente = await respuesta.json();
    return paciente;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerPaciente = async (id) => {
  try {
    const respuesta = await fetch(URL_PACIENTES + "/" + id);
    const paciente = await respuesta.json();
    return paciente;
  } catch (error) {
    console.log(error);
  }
};

export const crearPaciente = async (paciente) => {
    try {
        const respuesta = await fetch(URL_PACIENTES, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(paciente),
        });
        const data = await respuesta.json();
        return { status: respuesta.status, data };
    } catch (error) {
        console.log(error.mensaje);
    }
};

export const borrarPaciente = async (id) => {
  try {
    const respuesta = await fetch(URL_PACIENTES + "/" + id, {
      method: "DELETE",
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export const editarPaciente = async (paciente, id) => {
  try {
    const respuesta = await fetch(URL_PACIENTES + "/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(paciente),
    });
    return respuesta;
  } catch (error) {
    console.log(error);
  }
};
