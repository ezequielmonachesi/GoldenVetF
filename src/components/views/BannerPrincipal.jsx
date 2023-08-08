import React from "react";
import BannerSmall from "../../assets/Banner2.png";
import Banner from "../../assets/Banner.png";
import { Image } from "react-bootstrap";

const BannerPrincipal = () => {
  return (
    <>
      <Image src={BannerSmall} className="w-100 d-block d-md-none"></Image>
      <Image src={Banner} className="w-100 d-none d-md-block"></Image>
    </>
  );
};

export default BannerPrincipal;
