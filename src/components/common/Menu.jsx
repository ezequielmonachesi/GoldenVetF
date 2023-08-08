import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from '../../assets/logo.png'
import { NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    setUsuarioLogueado({});
    sessionStorage.removeItem('usuario');
    setTimeout(() => {
      navegacion('/');
    }, 10);
  }
  
  return (
    <Navbar expand="lg" className="bg-navBar py-1">
      <Container>
        <Navbar.Brand as={NavLink} to={"/"} className="brandNavBar">
          <img src={logo} alt="" height="55px" width="75px" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navBarGoldenVet" />
        <Navbar.Collapse id="navBarGoldenVet">
          <Nav className="ms-auto">
            <NavLink end to={'/'} className={'nav-item nav-link hoverEffect'}>Inicio</NavLink>
            <NavLink end to={'/planes'} className={'nav-item nav-link hoverEffect'}>Planes</NavLink>
            <NavLink end to={'/productos'} className={'nav-item nav-link hoverEffect'}>Productos</NavLink>
            <NavLink end to={'/servicios'} className={'nav-item nav-link hoverEffect'}>Servicios</NavLink>
            {usuarioLogueado.nombreUsuario && usuarioLogueado.rol === 'administrador' && (
              <NavLink end to={'/admin'} className={'nav-item nav-link hoverEffect'}>Administrador</NavLink>
            )}

            {usuarioLogueado.nombreUsuario && usuarioLogueado.rol === 'usuario' && (
              <NavLink end to={'/usuario'} className={'nav-item nav-link'}>Usuario</NavLink>
            )}

            {!usuarioLogueado.nombreUsuario && (
              <>
                <NavLink end to={'/registro'} className={'nav-item nav-link hoverEffect'}>Registro</NavLink>
                <NavLink end to={'/login'} className={'nav-item nav-link hoverEffect'}>Login</NavLink>
              </>
            )}

            {usuarioLogueado.nombreUsuario && (
              <NavLink onClick={logout} className={'nav-item nav-link'}>Cerrar Sesión</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
