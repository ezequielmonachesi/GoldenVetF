import Planes from '../shared/Inicio/Planes';
import Publicidad from '../shared/Inicio/Publicidad'
import Testimonios from '../shared/testimonios/Testimonios';

const Inicio = () => {

    return (
        <section className='mainSection'>
        <Planes/>
        <Publicidad/>
        <Testimonios/>
        </section>
    );
};

export default Inicio;
