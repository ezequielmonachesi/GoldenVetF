import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import CardProducto from "../../views/Producto/CardProducto";
import { ArrowRight } from "react-bootstrap-icons";

const ProductosInicio = () => {
  const { data } = useFetchData("productos");
  const productos = data?.slice(0, 4);
  return (
    <Container className="shadow-lg p-3 my-5 bg-white rounded">
      <div className="d-flex justify-content-between">
        <h4>Ofertas</h4>
        <Link onClick={() => window.scrollTo(0, 0)} to={"/productos"} className="boton-verMas-productoInicio">
          Ver más <ArrowRight />
        </Link>
      </div>
      <Row>
        {productos ? (
          productos.map((producto) => (
            <CardProducto producto={producto} key={producto.id} />
          ))
        ) : (
          <h5>No hay ofertas por el momento</h5>
        )}
      </Row>
    </Container>
  );
};

export default ProductosInicio;
