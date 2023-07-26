import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './publicidad.css'

const Publicidad = () => {
    return (
        <>
        <Carousel fade>
            <Carousel.Item>
                <img 
                    src="https://www.petmania.com.ar/imgs/mcat/mcat-banner-perros-alimento.png?v=8" 
                    alt="Publicidad de alimento para perro" 
                    className='img-fluid w-100 img-altura'/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    src="https://www.whiskas.com.ar/cdn-cgi/image/format%3Dauto%2Cq%3D90/sites/g/files/fnmzdf2296/files/2022-12/Adult_hero_desktop-ar.png" 
                    alt="Alimento para gatos Whiskas"
                    className='img-fluid w-100 img-altura' />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://guialocal-concordia.s3.us-east-2.amazonaws.com/2019/07/4_patitas_peluquerÃ%C2%ADa_canina_11154_banner.png" 
                    alt="Peluqueria canina a domicilio" 
                    className='img-fluid w-100 img-altura'/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Publicidad;