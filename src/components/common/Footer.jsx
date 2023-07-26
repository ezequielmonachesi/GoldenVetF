import { Facebook, GeoAltFill, Instagram, TelephoneFill, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <>
        <footer className='bg-footer text-light text-center p-5'>
            <article className='row w-100'>
                <section className='col-md-4'>
                    <h3>Nuestas redes</h3>
                    <p>Instagram <Instagram className='text-black fs-4'/></p>
                    <p>Facebook <Facebook className='text-black fs-4'/></p>
                    <p>Twitter <Twitter className='text-black fs-4'/></p>
                </section>
                <section className='col-md-4 justify-content-cente'>
                    <h3>A donde quieres ir?</h3>
                    <ul className='list-unstyled'>
                        <li>
                            <a href="#">Inicio</a>
                        </li>
                        <li>
                            <a href="#">Productos</a>
                        </li>
                        <li>
                            <a href="#">Servicios</a>
                        </li>
                        <li>
                            <a href="#">Registrarse</a>
                        </li>
                        <li>
                            <a href="#">Login</a>
                        </li>
                    </ul>
                </section>
                <section className='col-md-4'>
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