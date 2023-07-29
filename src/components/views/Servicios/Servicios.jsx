import CardServicio from './CardServicio';
import './Servicios.css'
import { useFetchData } from '../../hooks/useFetchData';


const Servicios = () => {
    // const [servicios, setServicios] = useState([]);
    // useEffect(()=>{
    //     obtenerServicios().then(res=>{
    //         setServicios(res);
            
    //     })
    // },[]);

    const { data, isLoading, error } = useFetchData('servicios');
    
    const listado = data?.map(servicio => 
        <CardServicio nombreServicio={servicio.nombreServicio}
        imagen={servicio.imagen} 
        descripcion={servicio.descripcion}
        key={servicio.id }/>);
    
    return (
        <>
            <section className='container text-center bg-container-servicios'>
                <h2 className='m-5'>Nuestros Servicios</h2>
                <div className='row justify-content-center'>
                    {listado?.length >= 1 ? listado : <h3>Hubo un error al cargar los servicios</h3>}
                </div>
            </section>
        </>
    );
};

export default Servicios;