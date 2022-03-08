import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Cardsarticles from './Components/Cardsarticles';
import Footer from './Components/Footer';
import CarouselHome from './Components/CarouselHome';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';
import { renderMatches } from 'react-router-dom';
import { data } from 'jquery';


class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      loading: true,
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:1337/api/articles?populate=*', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    const articles = await response.json()
    this.setState({ articles: articles, loading: false })
  }

  render() {
    console.log(this.state.articles)
    return (
      <div className="Home">
        <Navigationbar />
        <SearchIDE />
        <CarouselHome />
        <div className='cardspace'>
          <Row>
            <Col>
              {
                this.state.articles.data &&
                this.state.articles.data.map((articles, i) => { return <Cardsarticles articles={articles} /> })
              }
            </Col>
          </Row>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;