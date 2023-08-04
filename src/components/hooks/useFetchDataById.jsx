import { useState, useEffect } from 'react';
import { obtenerComentario } from '../helpers/queriesComentarios';
import { obtenerUsuario } from '../helpers/queriesUsuarios';
import { obtenerPaciente } from '../helpers/queriesPacientes';
import { obtenerProducto } from '../helpers/queriesProductos';
import { obtenerUnServicio } from '../helpers/queriesServicios';
import { obtenerTurno } from '../helpers/queriesTurnos';

export const useFetchDataById = (dataType, id) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await seleccionarDatosATraer(dataType, id);
        setData(response);
        setError(null);
      } catch (error) {
        setError('Error al obtener el dato.');
      }

      setIsLoading(false);
    };

    fetchData();
  }, [dataType, id]);

  async function seleccionarDatosATraer(dataType, id) {
    switch (dataType) {
      case 'comentarios':
        return obtenerComentario(id);
      case 'pacientes':
        return obtenerPaciente(id);
      case 'productos':
        return obtenerProducto(id);
      case 'servicios':
        return obtenerUnServicio(id);
      case 'turnos':
        return obtenerTurno(id);
      case 'usuarios':
        return obtenerUsuario(id);
      default:
        throw new Error(`Tipo de dato no soportado: ${dataType}`);
    }
  }

  return {
    data,
    isLoading,
    error,
  };
};