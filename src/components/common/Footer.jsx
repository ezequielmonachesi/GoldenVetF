import React from 'react';
import { Facebook, GeoAltFill, Instagram, TelephoneFill, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <>
        <footer className='bg-dark text-light text-center'>
            <article className='row w-100'>
                <section className='col-md-6'>
                    <h3>Nuestas redes</h3>
                    <p>Instagram <Instagram/></p>
                    <p>Facebook <Facebook/></p>
                    <p>Twitter <Twitter/></p>
                </section>
                <section className='col-md-6'>
                    <h3>Nos ubicamos en</h3>
                    <p><GeoAltFill/> AV. xxxx al xxx</p>
                    <h3>Telefono de contacto</h3>
                    <p><TelephoneFill/> xxxx-xxxxxx</p>
                </section>
            </article>
        </footer>
        </>
    );
};

export default Footer;