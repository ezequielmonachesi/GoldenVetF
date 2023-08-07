import {
  Facebook,
  Instagram,
  Twitter,
} from "react-bootstrap-icons";
import { Link, useLocation } from "react-router-dom";
import "../../App.css";
import { Image, Col, Row, Container } from "react-bootstrap";
import Logo from "../../assets/logo.png";

const Footer = ({ path }) => {
  const { pathname } = useLocation();
  if (pathname.slice(0, 6) === "/admin") return null;

  return (
    <>
      <footer className="bg-footer text-light text-center py-5">
        <Container>
          <Row className="gy-4">
            <Col md={3}>
              <div className="hoverEffect">
                <Link to={"/"}>
                  <Image src={Logo}></Image>
                </Link>
              </div>
            </Col>
            <Col md={3}>
              <h5>Nosotros</h5>
              <div className="d-flex flex-column">
                <Link to={"/sobre-nosotros"} className="text-white hoverEffect">
                  Sobre Nosotros
                </Link>
                <Link to={"/contacto"} className="text-white hoverEffect">
                  Contacto
                </Link>
              </div>
              <ul className="list-unstyled m-0">
                <li className="hoverEffect text-white"></li>
                <li></li>
              </ul>
            </Col>
            <Col md={3}>
              <h5>¡Seguinos!</h5>
              <div className="d-flex flex-wrap justify-content-center">
                <a
                  href="https://www.instagram.com/rollingcodeschool/"
                  target="_blank"
                >
                  <div className="d-flex align-items-center text-white hoverEffect mx-1">
                    <Instagram className="fs-6 mx-2" />
                    <p className="m-0">Instagram</p>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/RollingCodeSchool"
                  target="_blank"
                >
                  <div className="d-flex align-items-center text-white hoverEffect mx-1">
                    <Facebook className="fs-6 mx-2" />
                    <p className="m-0">Facebook</p>
                  </div>
                </a>
                <a href="https://twitter.com/rollingcodeok" target="_blank">
                  <div className="d-flex align-items-center text-white hoverEffect mx-1">
                    <Twitter className="fs-6 mx-2" />
                    <p className="m-0">
                      Twitter - <span className="italic">X</span>
                    </p>
                  </div>
                </a>
              </div>
            </Col>
            <Col md={3}>
              <h5>Ubicación</h5>
              <a href="https://goo.gl/maps/Zfzw6vLcxR2r1QPN7" target="_blank">
                <p className="text-md-start text-white hoverEffect">
                  Gral. Paz 576, T4000 San Miguel de Tucumán, Tucumán
                </p>
              </a>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14240.408879082126!2d-65.2072018!3d-26.8367009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1691380442500!5m2!1ses-419!2sar"
                width="150"
                height="100"
                className="rounded-2 border-secondary"
              ></iframe>
            </Col>
            <Col>
              <hr />
              <Row className="justify-content-center">
                <Col md={4}>
                  <p className="mb-0 mx-2 small">&copy; GoldenVet</p>
                </Col>
                <Col md={4}>
                  <p className="mb-0 mx-2 small">
                    Todos los derechos reservados 2023
                  </p>
                </Col>
                <Col md={4}>
                  <Link to={"pagina-no-encontrada"}>
                    <p className="mb-0 mx-2 text-white small hoverEffect">
                      Términos y condiciones
                    </p>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
