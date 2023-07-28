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
                    className=' w-100 img-altura'/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    src="https://www.whiskas.com.ar/cdn-cgi/image/format%3Dauto%2Cq%3D90/sites/g/files/fnmzdf2296/files/2022-12/Adult_hero_desktop-ar.png" 
                    alt="Alimento para gatos Whiskas"
                    className=' w-100 img-altura' />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src="https://www.wholeearthfarms.com.ar/sites/default/files/styles/frontpage_slider/public/BANNER_HERO-PRODUCTOS.jpeg?itok=H9P5UkP1"
                    alt="Alimento para perros Whole Earth Farms"
                    className=' w-100 img-altura'/>
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </>
    );
};

export default Publicidad;