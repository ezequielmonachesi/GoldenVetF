import { useEffect, useState } from "react";
import CardServicio from "./CardServicio";
import "./Servicios.css";
import { useFetchData } from "../../hooks/useFetchData";
import { Spinner } from "react-bootstrap";

const Servicios = () => {
  const [servicios, setServicios] = useState([]);
  const { data, isLoading, error } = useFetchData("servicios");

  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const listado = data?.map((servicio) => (
    <CardServicio
      nombreServicio={servicio.nombreServicio}
      imagen={servicio.imagen}
      descripcion={servicio.descripcion}
      key={servicio.id}
      id={servicio.id}
    />
  ));
  
    const chunksOfThree = chunkArray(listado, 3);
  
    const serviciosContainers = chunksOfThree.map((chunk, index) => (
      <div className="row position-relative mb-lg-5 pb-lg-5 mb-md-2 pb-md-2 " key={index}>
        {chunk}
      </div>
    ));

  const showComponent = () => {
    if (isLoading) {
      return (
        <div className="my-5">
          <Spinner animation="border" variant="primary" />
        </div>
      );
    }

    if (!isLoading && listado?.length <= 0) {
      return (
        <h3 className="text-danger border p-3">
          Hubo un error al cargar los servicios
        </h3>
      );
    }

    return serviciosContainers;
  };

  return (
    <>
      <section className="container text-center bg-container-servicios position-relative p-3 my-5 rounded shadow">
        <h2 className="display-4">Nuestros Servicios</h2>
        <hr />
        <div className="row justify-content-center">{showComponent()}</div>
      </section>
    </>
  );
};
export default Servicios;
