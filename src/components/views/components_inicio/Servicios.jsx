import React from 'react';
import CardServicio from './CardServicio';


const Servicios = () => {
    return (
        <>
        <section className='container text-center'>
            <h2>Nuestros Servicios</h2>
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