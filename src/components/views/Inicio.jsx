import Planes from "../shared/Inicio/Planes";
import Publicidad from "../shared/Inicio/Publicidad";
import FormularioTestimonios from '../shared/formularioTestimonios/FormularioTestimonios';
import ProductosInicio from "../shared/Inicio/ProductosInicio";
import BannerPrincipal from "./BannerPrincipal";

const Inicio = () => {
  return (
    <section className="mainSection">
      <BannerPrincipal></BannerPrincipal>
      <Publicidad />
      <Planes />
      <ProductosInicio />
      <FormularioTestimonios/>
    </section>
  );
};

export default Inicio;
