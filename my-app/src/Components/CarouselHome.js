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
            <Carousel.Caption className='carou'>
              <h3>Vente de porte de qualitées</h3>
              <p>Parcourez nos articles afin de trouver la porte de vos rêves</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src={'http://localhost:1337/uploads/carousel_porte_2_modif_8831fba31a.jpg'}
              alt="Second slide"
            />
            <Carousel.Caption className='carou'>
              <h3>Portaporte près de chez vous</h3>
              <p>Livraison rapides en quelques jours</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 h-100"
              src={'http://localhost:1337/uploads/carousel_porte_3_modifie_f7815a3118.jpg'}
              alt="Third slide"
            />
            <Carousel.Caption className='carou'>
              <h3>Matériaux, formes, types</h3>
              <p>Tout pour combler l'envie de nos clients</p>
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
  )
}

export default CarouselHome;