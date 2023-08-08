import CardServicio from "./CardServicio";
import "./Servicios.css";
import { useFetchData } from "../../hooks/useFetchData";
import { Spinner } from "react-bootstrap";

const Servicios = () => {
  const { data, isLoading } = useFetchData("servicios");

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

  const chunksOfThree = chunkArray(listado || [], 3);

  return (
    <>
      <section className="container text-center bg-container-servicios position-relative p-3 my-5 rounded shadow">
        <h2 className="display-4">Nuestros Servicios</h2>
        <hr />
        <div className="row justify-content-center">
          {isLoading ? (
            <div className="my-5 text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : listado?.length ? (
            chunksOfThree.map((chunk, index) => (
              <div
                className="row position-relative mb-lg-5 pb-lg-5 mb-md-2 pb-md-2 "
                key={index}
              >
                {chunk}
              </div>
            ))
          ) : (
            <h3 className="text-danger p-3">
              Hubo un error al cargar los servicios. Por favor, inténtalo de
              nuevo más tarde.
            </h3>
          )}
        </div>
      </section>
    </>
  );
};
export default Servicios;
