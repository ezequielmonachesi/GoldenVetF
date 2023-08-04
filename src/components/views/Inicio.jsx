import Planes from '../shared/Inicio/Planes';
import Publicidad from '../shared/Inicio/Publicidad'

const Inicio = () => {

    return (
        <section className='mainSection'> 
        <Publicidad></Publicidad>
        <Planes/>
        <Publicidad/>
        </section>
    );
};

export default Inicio;
