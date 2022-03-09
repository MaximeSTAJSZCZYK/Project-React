import { Carousel } from 'react-bootstrap';

function CarouselHome(props) {
  console.log(props)
  return (
    <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src={'http://localhost:1337/uploads/carousel_porte_1_modifie_adad470ba9.jpg'}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src={'http://localhost:1337/uploads/carousel_porte_2_modif_8831fba31a.jpg'}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src={'http://localhost:1337/uploads/carousel_porte_3_modifie_f7815a3118.jpg'}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome;