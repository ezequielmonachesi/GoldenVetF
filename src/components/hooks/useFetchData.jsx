import { useState, useEffect } from 'react';
import { fetchData } from '../helpers/queriesServicios'; // Reemplaza 'fetchData' por la función real que obtiene los datos del backend

export const useFetchData = (dataType) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setIsLoading(true);

            const response = await fetchData(dataType);
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

    return {
        data,
        isLoading,
        error,
    };
};