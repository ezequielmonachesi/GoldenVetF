import { Container, Row, Button} from "react-bootstrap";
import CardTurnosAdministrador from "./CardTurnosAdministrador";
import {useFetchData} from '../../../hooks/useFetchData'

const Turnos = () => {
  const {data,isLoading,error} = useFetchData('turnos')
  return <>
  <Container>
    <div className="text-center"><Button>Crear Turno</Button></div>
    <Row className="mt-5">
      {data.map(turno => <CardTurnosAdministrador turno={turno}/>)}
    </Row>
  </Container>
  </>;
};

export default Turnos;
