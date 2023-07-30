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
        <section className='container text-center bg-container-planes'>
            <h2 className='m-5'>Nuestros Planes para su mascota</h2>
            <div className='row justify-content-center'>
                {listado}
            </div>
        </section>
    );
};

export default Planes;