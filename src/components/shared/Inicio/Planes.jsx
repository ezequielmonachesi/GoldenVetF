import { planData } from '../planes/planData';
import CardPlan from './CardPlan';

const Planes = () => {
    const planes = planData;
    const listado = planes.map(plan => 
        <CardPlan nombrePlan={plan.nombrePlan}
        rangoEdad={plan.rangoEdad} 
        descripcion={plan.descripcion}
        serviciosPlan={plan.serviciosPlan}
        imagenes={plan.imagenes}
        id={plan.id}
        key={plan.id}/>);

    return (
        <section className='container text-center bg-light p-sm-2 p-md-5 rounded shadow bg-opacity-75'>
            <h2 className=''>Nuestros Planes para su mascota</h2>
            <hr />
            <div className='row justify-content-center mt-5'>
                {listado}
            </div>
        </section>
    );
};

export default Planes;