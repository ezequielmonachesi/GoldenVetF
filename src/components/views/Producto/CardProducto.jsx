import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const CardProducto = () => {
    return (
        <Col  md={4} ld={3} className="mb-3">
        <Card className='shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title className='text-center'>Card Title</Card.Title>
          <Card.Text className='limite-texto'>
          Some quick example text to build on the card title and make up the bulk of the card's content.
          </Card.Text>
          <div className='text-center'>
          <button className='boton-verMas-producto fw-semibold rounded'>Ver mas</button>
          </div>
        </Card.Body>
      </Card>
        </Col>
        
    );
};

export default CardProducto;