import React from "react";
import { Container } from "react-bootstrap";
import images from "../../exports/images";
import { motion } from "framer-motion";

const BannerPublicidad = () => {
  return (
    <Container fluid>
      <h4>Marcas con las que trabajamos</h4>
      <motion.div className="slider-container">
        <motion.div
          className="slider"
          drag="x"
          dragConstraints={{ right: 0, left: 0 }}
        >
          {images.map((image, key) => (
            <motion.div className="item">
              <img
                src={image}
                id={key}
                className="w-100 bg-white rounded-3"
              ></img>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default BannerPublicidad;
