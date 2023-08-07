import { StarFill } from "react-bootstrap-icons";
import { useState } from "react";
import "./FormularioTestimonios.css";

const ValoracionConEstrellas = () => {
  const [valoracion, setValoracion] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((estrella, index) => {
        const valoracionValue = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="valoracion"
              className="radiobuton-formTestimonios"
              value={valoracionValue}
              onClick={() => setValoracion(valoracionValue)}

            />
            <StarFill
              className="estrella-testimonio"
              size={30}
              onMouseEnter={() => setHover(valoracionValue)}
              onMouseLeave={() => setHover(null)}
              color={valoracionValue <= (hover || valoracion) ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default ValoracionConEstrellas;
