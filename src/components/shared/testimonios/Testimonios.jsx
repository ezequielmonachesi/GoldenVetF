import { Container } from 'react-bootstrap';
import SliderTestimonios from './SliderTestimonios';

const Testimonios = () => {
    return (
        <Container className="bg-light border shadow rounded my-5 p-5">
            <h1>Mirá las opiniones de nuestros clientes!</h1>
            <hr />
            <SliderTestimonios/>
        </Container>
    );
};

export default Testimonios;