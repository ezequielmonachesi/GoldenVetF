import { Container, Row, Button, Spinner} from "react-bootstrap";
import CardTurnosAdministrador from "./CardTurnosAdministrador";
import {useFetchData} from '../../../hooks/useFetchData'

const Turnos = () => {
  const {data,isLoading} = useFetchData('turnos')
  return <>
  <Container>
    <div className="text-center"><Button>Crear Turno</Button></div>
    <Row className="mt-5">
      {isLoading ? <Spinner size="lg" variant="primary"/> :data.map(turno => <CardTurnosAdministrador turno={turno} key={turno.id}/>)}
    </Row>
  </Container>
  </>;
};

export default Turnos;
