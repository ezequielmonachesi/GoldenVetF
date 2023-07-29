import CardServicio from './CardServicio';
import './Servicios.css'
import { useFetchData } from '../../hooks/useFetchData';
import { Spinner } from 'react-bootstrap';


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

    const showComponent = () => {
        if (isLoading) {
            return (
                <div className="my-5">
                    <Spinner animation="border" variant="primary" />
                </div>
            );
        }

        if (isLoading && listado?.length >= 0) {
            return <h3 className='text-danger border p-3'>Hubo un error al cargar los servicios</h3>;
        }

        return listado;
    };
    
    return (
        <>
            <section className='container text-center bg-container-servicios'>
                <h2 className='m-5'>Nuestros Servicios</h2>
                <div className='row justify-content-center'>
                    { showComponent() }
                </div>
            </section>
        </>
    );
};

export default Servicios;