import { useState, useEffect } from 'react';
import { obtenerComentarios, obtenerComentario } from '../helpers/queriesComentarios';
import { obtenerPacientes, obtenerPaciente } from '../helpers/queriesPacientes';
import { obtenerProductos, obtenerProducto } from '../helpers/queriesProductos';
import { obtenerServicios, obtenerServicio } from '../helpers/queriesServicios';
import { obtenerTurnos, obtenerTurno } from '../helpers/queriesTurnos';
import { obtenerUsuarios, obtenerUsuario } from '../helpers/queriesUsuarios';

export const useFetchData = (dataType) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);

            const response = await seleccionarDatosATraer(dataType);
            if (!response?.ok) {
                setError(response?.message);
            } else {
                setData(response?.data);
                setError(null);
            }

            setIsLoading(false);
        };

        getData();
    }, [dataType]);

    async function seleccionarDatosATraer(dataType) {
        switch (dataType) {
            case 'comentarios':
                return obtenerComentarios();
            case 'comentario':
                return obtenerComentario(/* Aquí el id del comentario que quieras obtener */);
            case 'pacientes':
                return obtenerPacientes();
            case 'paciente':
                return obtenerPaciente(/* Aquí el id del paciente que quieras obtener */);
            case 'productos':
                return obtenerProductos();
            case 'producto':
                return obtenerProducto(/* Aquí el id del producto que quieras obtener */);
            case 'servicios':
                return obtenerServicios();
            case 'servicio':
                return obtenerServicio(/* Aquí el id del servicio que quieras obtener */);
            case 'turnos':
                return obtenerTurnos();
            case 'turno':
                return obtenerTurno(/* Aquí el id del turno que quieras obtener */);
            case 'usuarios':
                return obtenerUsuarios();
            case 'usuario':
                return obtenerUsuario(/* Aquí el id del usuario que quieras obtener */);
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