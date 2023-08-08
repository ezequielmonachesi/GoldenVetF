import Planes from "../shared/Inicio/Planes";
import Publicidad from "../shared/Inicio/Publicidad";
import DetalleProducto from "./DetalleProducto";

import ProductosInicio from "../shared/Inicio/ProductosInicio";
import BannerPrincipal from "./BannerPrincipal";

const Inicio = () => {
  return (
    <section className="mainSection">
      <BannerPrincipal></BannerPrincipal>
      <Publicidad />
      <Planes />
      <ProductosInicio />
    </section>
  );
};

export default Inicio;
