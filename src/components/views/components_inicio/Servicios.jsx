import React from 'react';
import CardServicio from './CardServicio';
import '../../../css/servicios.css'

const Servicios = () => {
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