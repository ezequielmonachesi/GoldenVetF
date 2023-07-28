import { useEffect, useState } from 'react';
import CardServicio from './CardServicio';
import './Servicios.css'
import { obtenerServicios } from '../../helpers/queries';


const Servicios = () => {
  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    obtenerServicios().then(res => {
      setServicios(res);
    });
  }, []);

  // Function to split the servicios array into smaller arrays of three elements each
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const listado = servicios.map(servicio => (
    <CardServicio
      nombreServicio={servicio.nombreServicio}
      imagen={servicio.imagen}
      descripcion={servicio.descripcion}
      key={servicio.id}
    />
  ));

  // Split the listado into smaller arrays of three elements each
  const chunksOfThree = chunkArray(listado, 3);

  // Map over the chunks and create a new container for each group of three elements
  const serviciosContainers = chunksOfThree.map((chunk, index) => (
    <div className="row position-relative mb-lg-5 pb-lg-5 " key={index}>
      {chunk}
    </div>
  ));

  return (
    <>
      <section className="container text-center bg-container-servicios position-relative">
        <h2 className="m-5">Nuestros Servicios</h2>
        <div className='row justify-content-center'>
        {serviciosContainers}
        </div>
      </section>
    </>
  );
};
export default Servicios;