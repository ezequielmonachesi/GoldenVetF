import Planes from "../shared/Inicio/Planes";
import Publicidad from "../shared/Inicio/Publicidad";
import FormularioTestimonios from "../shared/formularioTestimonios/FormularioTestimonios";
import ProductosInicio from "../shared/Inicio/ProductosInicio";
import BannerPrincipal from "./BannerPrincipal";
import TestimoniosPaginaInicio from "./TestimoniosPaginaInicio";
import BannerPublicidad from "./BannerPublicidad";
import BienvenidaInicio from "../shared/Inicio/BienvenidaInicio";

const Inicio = () => {
  return (
    <section className="mainSection">
      <BannerPrincipal />
      <BienvenidaInicio />
      <Publicidad />
      <Planes />
      <BannerPublicidad />
      <ProductosInicio />
      <TestimoniosPaginaInicio />
      <FormularioTestimonios />
    </section>
  );
};

export default Inicio;
