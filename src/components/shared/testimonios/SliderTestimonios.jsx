import { Card } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const SliderTestimonios = () => {
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlay
            autoPlaySpeed={1000}
            centerMode={true}
            className=""
            containerClass="container-with-dots"
            customTransition="all 1s linear"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
                desktop: {
                    breakpoint: {
                        max: 3000,
                        min: 1024
                    },
                    items: 3,
                    partialVisibilityGutter: 40
                },
                mobile: {
                    breakpoint: {
                        max: 464,
                        min: 0
                    },
                    items: 1,
                    partialVisibilityGutter: 30
                },
                tablet: {
                    breakpoint: {
                        max: 1024,
                        min: 464
                    },
                    items: 2,
                    partialVisibilityGutter: 30
                }
            }}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={2}
            swipeable
            transitionDuration={1000}
        >
            <div style={{ padding: '0 5px' }}>
                <Card className='mx-3' style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Silvio Ruiz</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">xxxx</Card.Subtitle>
                        <Card.Text>
                            Muy buena atención siempre llevo a mi perrito y son geniales
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


            <div style={{ padding: '0 5px' }}>
                <Card className='mx-3' style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Silvio Ruiz</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">xxxx</Card.Subtitle>
                        <Card.Text>
                            Muy buena atención siempre llevo a mi perrito y son geniales kjhkjhkjhkjhkh
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


            <div style={{ padding: '0 5px' }}>
                <Card className='mx-3' style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Silvio Ruiz</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">xxxx</Card.Subtitle>
                        <Card.Text>
                            Muy buena atención
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


            <div style={{ padding: '0 5px' }}>
                <Card className='mx-3' style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Silvio Ruiz</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">xxxx</Card.Subtitle>
                        <Card.Text>
                            Muy buena atención siempre llevo
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>


            <div style={{ padding: '0 5px' }}>
                <Card className='mx-3' style={{ width: '100%' }}>
                    <Card.Body>
                        <Card.Title>Silvio Ruiz</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">xxxx</Card.Subtitle>
                        <Card.Text>
                            Muy buena atención siempre llevo a mi perrito y son geniales
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Carousel>
    );
};

export default SliderTestimonios;