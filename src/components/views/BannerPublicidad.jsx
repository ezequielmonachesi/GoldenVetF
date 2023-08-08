import { Card, Container, Image } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import images from "../../exports/images";
import { height } from "@mui/system";

const BannerPublicidad = () => {
  return (
    <div className="bg-white bg-opacity-75 shadow pt-2 my-5">
      <Container fluid>
        <p className="lead m-0">Marcas con las que trabajamos</p>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={2000}
          centerMode={true}
          className="my-5"
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
          {images.map((image, i) => {
            return (
              <div style={{ padding: "0 5px" }} key={i}>
                <Card className="align-items-center border-0">
                  <Card.Img src={image} alt={image} style={{height: "5rem", width: "10rem"}}></Card.Img>
                </Card>
              </div>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
};

export default BannerPublicidad;
