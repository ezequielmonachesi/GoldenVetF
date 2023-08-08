import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { obtenerComentarios } from "../helpers/queriesComentarios";
import Swal from "sweetalert2";
import { Quote, StarFill } from "react-bootstrap-icons";

const TestimoniosPaginaInicio = () => {
  const [testimonios, setTestimonios] = useState([]);

  const formatoFecha = (fecha) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour12: false,
    };
    return new Date(fecha).toLocaleString(undefined, options);
  };

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
    <div className="bg-white bg-opacity-75 shadow my-5 py-4">
      <h5 className="text-start text-secondary ps-5 display-6">
        <Quote className="fs-1 estrella-dorada plan-description"></Quote>Testimonios
      </h5>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={true}
        className="mt-4"
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
            <Row key={testimonio.id}>
              <Col md={12}>
                <Card className="mx-3 border-card-testimonios shadow">
                  <Card.Body className="cuerpo-comentario">
                    <Card.Title className="d-flex flex-column flex-md-row justify-content-between">
                      <span>{testimonio.nombre}</span>
                      <span>
                        {(() => {
                          switch (testimonio.puntuacion) {
                            case 1:
                              return (
                                <StarFill className="estrella-dorada"></StarFill>
                              );
                            case 2:
                              return (
                                <>
                                  <StarFill className="estrella-dorada"></StarFill>
                                  <StarFill className="estrella-dorada"></StarFill>
                                </>
                              );
                            case 3:
                              return (
                                <>
                                  <StarFill className="estrella-dorada"></StarFill>
                                  <StarFill className="estrella-dorada"></StarFill>
                                  <StarFill className="estrella-dorada"></StarFill>
                                </>
                              );
                            case 4:
                              return (
                                <>
                                  <StarFill className="estrella-dorada"></StarFill>
                                  <StarFill className="estrella-dorada"></StarFill>
                                  <StarFill className="estrella-dorada"></StarFill>
                                  <StarFill className="estrella-dorada"></StarFill>
                                </>
                              );
                            case 5:
                              return (
                                <>
                                  <StarFill className="estrella-dorada"></StarFill>
                                  <StarFill className="estrella-dorada"></StarFill>
                                  <StarFill className="estrella-dorada"></StarFill>
                                  <StarFill className="estrella-dorada"></StarFill>
                                  <StarFill className="estrella-dorada"></StarFill>
                                </>
                              );
                            default:
                              return "";
                          }
                        })()}
                      </span>
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted small mt-3 mt-md-0">
                      {formatoFecha(testimonio.creado)}
                    </Card.Subtitle>
                    <Card.Text className="limite-texto fs-5">
                      {testimonio.comentario}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          );
        })}
      </Carousel>
    </div>
  );
};

export default TestimoniosPaginaInicio;
