import Carousel from "react-bootstrap/Carousel";
import "./publicidad.css";
import { Col, Container, Row } from "react-bootstrap";

const Publicidad = () => {
  return (
    <>
      <Container className="my-5">
        <Row className="justify-content-center align-items-center h-75 shadow py-4 py-md-3 px-md-4 px-lg-0 border rounded-3 bg-opacity-75 bg-white">
          <Col lg={7}>
            <Carousel fade>
              <Carousel.Item>
                <img
                  src="https://www.hipermania.com.ar/imgs/lcat/lcat-royalcanin.png"
                  alt="Publicidad de alimento para perro"
                  className=" w-100 img-altura rounded-3"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://pbs.twimg.com/media/D4nBsw5UYAAZwIh.jpg"
                  alt="Alimento para gatos Whiskas"
                  className=" w-100 img-altura rounded-3"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://www.wholeearthfarms.com.ar/sites/default/files/styles/frontpage_slider/public/BANNER_HERO-PRODUCTOS.jpeg?itok=H9P5UkP1"
                  alt="Alimento para perros Whole Earth Farms"
                  className=" w-100 img-altura rounded-3"
                />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col lg={4} className="mt-4 mt-md-0">
            <h2 className="display-6">
              <span className="border-up">Los mejores</span> alimentos
            </h2>
            <p className="m-0 plan-description">
              En nuestra veterinaria, cuidamos el bienestar de tus adorables
              compañeros peludos. Por eso, te ofrecemos una selección
              cuidadosamente elegida de los mejores alimentos para animales.
              🐾🥇
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Publicidad;
