import Planes from '../shared/Inicio/Planes';
import Publicidad from '../shared/Inicio/Publicidad'
import Usuario from './usuario/Usuario';

const Inicio = () => {

    return (
        <section className='mainSection'> 
        <Publicidad></Publicidad>
        <Planes/>
        <Publicidad/>
        <Usuario/>
        </section>
    );
};

export default Inicio;
