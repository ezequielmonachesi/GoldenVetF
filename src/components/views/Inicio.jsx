import Planes from "../shared/Inicio/Planes";
import Publicidad from "../shared/Inicio/Publicidad";
import FormularioTestimonios from '../shared/formularioTestimonios/FormularioTestimonios';
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
      <FormularioTestimonios/>
    </section>
  );
};

export default Inicio;
