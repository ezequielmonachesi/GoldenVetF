import React from "react";
import { Container, Carousel } from "react-bootstrap";
import ExampleCarouselImage from "components/ExampleCarouselImage";

const BannerPublicidad = () => {
  return (
    <Container fluid className="bg-white">
      <h2>Marcas con las que trabajamos</h2>
      <Carousel>
        <Carousel.Item>
          <ExampleCarouselImage text="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <ExampleCarouselImage text="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default BannerPublicidad;
