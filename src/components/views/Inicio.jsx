import Planes from '../shared/Inicio/Planes';
import Publicidad from '../shared/Inicio/Publicidad'

import ProductosInicio from '../shared/Inicio/ProductosInicio';

const Inicio = () => {

    return (
        <section className='mainSection'>
        <Planes/>
        <Publicidad/>
        <ProductosInicio/>
        </section>
    );
};

export default Inicio;
