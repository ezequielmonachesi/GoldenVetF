import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/logo.png'

const Menu = () => {
  return (
    <Navbar expand="lg" className="bg-navBar py-0">
      <Container>
        <Navbar.Brand href="#home" className="brandNavBar">
        <img src={logo} alt="" height="55px" width="75px" className="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navBarGoldenVet" />
        <Navbar.Collapse id="navBarGoldenVet">
          <Nav className="ms-auto">
            <Nav.Link href="#">Inicio</Nav.Link>
            <Nav.Link href="#">Planes</Nav.Link>
            <Nav.Link href="#">Productos</Nav.Link>
            <Nav.Link href="#">Servicios</Nav.Link>
            <Nav.Link href="#">Registro</Nav.Link>
            <Nav.Link href="#">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
