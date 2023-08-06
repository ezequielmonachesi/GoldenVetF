import Carousel from 'react-bootstrap/Carousel';

function CarouselPlanImg({ imagenes }) {
  return (
    <Carousel fade indicators={false} pause={false} controls={false}>
      {imagenes.map((imagen) => (        
        <Carousel.Item key={imagen}>
          <img
            className="d-block w-100"
            src={imagen}
            alt="First slide"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselPlanImg;