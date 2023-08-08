import Planes from "../shared/Inicio/Planes";
import Publicidad from "../shared/Inicio/Publicidad";
import DetalleProducto from "./DetalleProducto";

import ProductosInicio from "../shared/Inicio/ProductosInicio";
import BannerPrincipal from "./BannerPrincipal";
import BannerPublicidad from "./BannerPublicidad";

const Inicio = () => {
  return (
    <section className="mainSection">
      <BannerPrincipal />
      <Publicidad />
      <Planes />
      <BannerPublicidad></BannerPublicidad>
      <ProductosInicio />
    </section>
  );
};

export default Inicio;
