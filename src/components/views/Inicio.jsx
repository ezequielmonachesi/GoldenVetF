import Planes from '../shared/Inicio/Planes';
import Publicidad from '../shared/Inicio/Publicidad'
import DetalleProducto from './DetalleProducto';


import ProductosInicio from '../shared/Inicio/ProductosInicio';

const Inicio = () => {

    return (
        <section className='mainSection'>
        <Publicidad/>
        <Planes/>     
        <ProductosInicio/>
        </section>
    );
};

export default Inicio;
