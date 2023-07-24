import React from 'react';
import { Facebook, GeoAltFill, Instagram, TelephoneFill, Twitter } from 'react-bootstrap-icons';
import "../../css/Inicio.css"

const Footer = () => {
    return (
        <>
        <footer className='bg-footer text-light text-center'>
            <article className='row w-100'>
                <section className='col-md-6'>
                    <h3>Nuestas redes</h3>
                    <p>Instagram <Instagram className='text-black fs-4'/></p>
                    <p>Facebook <Facebook className='text-black fs-4'/></p>
                    <p>Twitter <Twitter className='text-black fs-4'/></p>
                </section>
                <section className='col-md-6'>
                    <h3>Nos ubicamos en</h3>
                    <p><GeoAltFill className='text-black fs-4'/> AV. xxxx al xxx</p>
                    <h3>Telefono de contacto</h3>
                    <p><TelephoneFill className='text-black fs-4'/> xxxx-xxxxxx</p>
                </section>
            </article>
        </footer>
        </>
    );
};

export default Footer;