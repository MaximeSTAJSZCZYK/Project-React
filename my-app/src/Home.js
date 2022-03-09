import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Cardsarticles from './Components/Cardsarticles';
import Footer from './Components/Footer';
import CarouselHome from './Components/CarouselHome';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    console.log(this.props)
    return (
      <div className="Home">
        <Navigationbar />
        <SearchIDE />
        <CarouselHome carousel={this.props.carousel} />
        <div className='cardspace'>
          <Row>
            {
              this.props.articles.data &&
              this.props.articles.data.slice(0, 6).map((articles, i) =>
                <Col xs={4} md={4} xl={4} xxl={4}>
                  <Cardsarticles articles={articles} />
                </Col>
              )}
          </Row>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;