import { Container, Row, Button} from "react-bootstrap";
import CardTurnosAdministrador from "./CardTurnosAdministrador";

const Turnos = () => {
 
  return <>
  <Container>
   
    <div className="text-center"><Button>Crear Turno</Button></div>
    <Row className="mt-5">
      <CardTurnosAdministrador/>
      <CardTurnosAdministrador/>
      <CardTurnosAdministrador/>
      <CardTurnosAdministrador/>
      <CardTurnosAdministrador/>
      <CardTurnosAdministrador/>
      <CardTurnosAdministrador/>
      <CardTurnosAdministrador/>
      <CardTurnosAdministrador/>
    </Row>
  </Container>
  </>;
};

export default Turnos;
