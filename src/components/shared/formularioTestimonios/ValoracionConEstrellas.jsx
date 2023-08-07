import { StarFill } from "react-bootstrap-icons";
import { useState } from "react";
import "./FormularioTestimonios.css";
import { Form } from "react-bootstrap";

const ValoracionConEstrellas = ({register}) => {
  const [valoracion, setValoracion] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
    {[...Array(5)].map((estrella, index) => {
      const valoracionValue = index + 1;

      return (
        <label key={index}>
          <Form.Check
            type="radio"             
            className="radiobuton-formTestimonios"
            name="puntuacion"
            value={valoracionValue}
            onClick={() => setValoracion(valoracionValue)}
            {...register("puntuacion",{
              required: "La puntuacion es requerida",
              max: 5,
              min: 1,
            })}

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
