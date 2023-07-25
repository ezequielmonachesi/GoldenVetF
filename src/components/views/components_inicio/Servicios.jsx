import React, { useEffect, useState } from 'react';
import CardServicio from './CardServicio';
import '../../../css/servicios.css'
import { obtenerServicios } from '../../helpers/queries';

const Servicios = () => {
    const [servicios, setServicios] = useState([]);
    useEffect(()=>{
        obtenerServicios().then(res=>{
            setServicios(res)
        })
    },[]);
    
    return (
        <>
        <section className='container text-center bg-container-servicios'>
            <h2 className='m-5'>Nuestros Servicios</h2>
            <div className='row'>
                <CardServicio/>
                <CardServicio/>
                <CardServicio/>
            </div>
        </section>
        </>
    );
};

export default Servicios;