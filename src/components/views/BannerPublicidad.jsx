import React from "react";
import { Container, Carousel, Image } from "react-bootstrap";
import images from "../../exports/images";
import { motion } from "framer-motion";

const BannerPublicidad = () => {
  return (
    <>
      <motion.div className="slider-container">
        <motion.div className="slider" drag="x" dragConstraints={{ right: 0, left: 0 }}>
          {images.map((image, key) => (
            <motion.div className="item">
              <img src={image} id={key} className="w-100"></img>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </>
  );
};

export default BannerPublicidad;
