import { StarFill } from "react-bootstrap-icons";
import { useState } from "react";
import { useForm} from "react-hook-form";
import "./FormularioTestimonios.css";

const ValoracionConEstrellas = () => {
  const [valoracion, setValoracion] = useState(null);
  const [hover, setHover] = useState(null);
  const {
    register,    
    formState: { errors },        
  } = useForm();

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
              {...register("puntuacion", {
                required: "El nombre del servicio es obligatorio.",
                minLength: {
                  value: 2,
                  message: "Cantidad mínima de 2 caracteres.",
                },
                maxLength: {
                  value: 50,
                  message: "Cantidad máxima de 50 caracteres.",
                },
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
