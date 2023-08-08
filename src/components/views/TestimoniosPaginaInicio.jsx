import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { obtenerComentarios } from "../helpers/queriesComentarios";
import Swal from "sweetalert2";

const TestimoniosPaginaInicio = () => {
  const [testimonios, setTestimonios] = useState([]);

  useEffect(() => {
    obtenerComentarios().then((respuesta) => {
      if (respuesta) {
        setTestimonios(respuesta);
        console.log(respuesta);
      } else {
        Swal.fire("Ocurrio un error", "Intente más tarde por favor", "error");
      }
    });
  }, []);

  return (
    <div>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={1000}
        centerMode={true}
        className=""
        containerClass="container-with-dots"
        customTransition="all 1s linear"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 3,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={2}
        swipeable
        transitionDuration={1000}
      >
        {testimonios.map((testimonio) => {
          return (
            <div style={{ padding: "0 5px" }} key={testimonio.id}>
              <Card className="mx-3" style={{ width: "100%" }}>
                <Card.Body>
                  <Card.Title>{testimonio.nombre}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {testimonio.creado}
                  </Card.Subtitle>
                  <Card.Text>
                    {testimonio.comentario}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TestimoniosPaginaInicio;
