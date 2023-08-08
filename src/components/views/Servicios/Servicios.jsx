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
        <div className="container mt-5 bg-light rounded shadow p-sm-2 p-md-5">
          <h1 className="text-center">Nuestros servicios</h1>
          <hr />
          <p className="text-center plan-description">
            En Golden Vet, nos enorgullece ofrecer una amplia gama de servicios
            veterinarios de alta calidad para cuidar de tus queridas mascotas.
            Nuestro equipo de profesionales altamente capacitados está
            comprometido con el bienestar y la salud de tus compañeros peludos.
            Desde exámenes médicos exhaustivos hasta tratamientos
            especializados, brindamos una atención compasiva y personalizada
            para satisfacer las necesidades individuales de cada animal.
          </p>
        </div>
      <section className="container text-center bg-container-servicios position-relative p-3 my-5 rounded shadow">
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
