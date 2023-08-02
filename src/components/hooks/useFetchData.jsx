import { useState, useEffect } from 'react';
import { obtenerComentarios } from '../helpers/queriesComentarios';
import { obtenerPacientes } from '../helpers/queriesPacientes';
import { obtenerProductos } from '../helpers/queriesProductos';
import { obtenerServicios } from '../helpers/queriesServicios';
import { obtenerTurnos } from '../helpers/queriesTurnos';
import { obtenerUsuarios } from '../helpers/queriesUsuarios';

export const useFetchData = (dataType) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await seleccionarDatosATraer(dataType);
      setData(response);
      setError(null);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [dataType]);

  async function seleccionarDatosATraer(dataType) {
    switch (dataType) {
      case 'comentarios':
        return obtenerComentarios();
      case 'pacientes':
        return obtenerPacientes();
      case 'productos':
        return obtenerProductos();
      case 'servicios':
        return obtenerServicios();
      case 'turnos':
        return obtenerTurnos();
      case 'usuarios':
        return obtenerUsuarios();
      default:
        throw new Error(`Tipo de dato no soportado: ${dataType}`);
    }
  }

  const refetchData = async () => {
    setIsLoading(true);
    await fetchData();
    setIsLoading(false);
  };

  return {
    data,
    isLoading,
    error,
    refetchData,
  };
};
