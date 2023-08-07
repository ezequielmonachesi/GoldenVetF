import Planes from '../shared/Inicio/Planes';
import Publicidad from '../shared/Inicio/Publicidad'
import DetalleProducto from './DetalleProducto';


import ProductosInicio from '../shared/Inicio/ProductosInicio';
import FormularioTestimonios from '../shared/formularioTestimonios/FormularioTestimonios';

const Inicio = () => {

    return (
        <section className='mainSection'>
        <Publicidad/>
        <Planes/>     
        <ProductosInicio/>
        <FormularioTestimonios/>
        </section>
    );
};

export default Inicio;
