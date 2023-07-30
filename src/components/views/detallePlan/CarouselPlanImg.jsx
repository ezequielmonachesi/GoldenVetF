import Carousel from 'react-bootstrap/Carousel';
import imagenPrimerosPasos1 from "../../../assets/plan-primeros-pasos-1.jpg";
import imagenPrimerosPasos2 from "../../../assets/plan-primeros-pasos-2.jpg";
import imagenPrimerosPasos3 from "../../../assets/plan-primeros-pasos-3.jpg";
import imagenPrimerosPasos4 from "../../../assets/plan-primeros-pasos-4.jpg";

function CarouselPlanImg() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagenPrimerosPasos1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagenPrimerosPasos2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagenPrimerosPasos3}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imagenPrimerosPasos4}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselPlanImg;