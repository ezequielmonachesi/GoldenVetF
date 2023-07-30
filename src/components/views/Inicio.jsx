import { Container } from 'react-bootstrap';
import Planes from '../shared/Inicio/Planes';
import Publicidad from '../shared/Inicio/Publicidad'
import Productos from './Productos';

const Inicio = () => {

    return (
        <section className='mainSection'>
        <Planes/>
        <Publicidad/>
        <div className='ms-lg-5'>
            <Productos/>
        </div>
        </section>
    );
};

export default Inicio;
