import React, {Component} from 'react';
import { Row, Col } from 'react-bootstrap';
import Cardsarticles from './Components/Cardsarticles';
import Footer from './Components/Footer';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';



class Home extends Component {
    
    constructor(props){
        super(props)
        this.state={
            articles:[]
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
        this.setState({
            articles: articles
        });
      }

    render() {
    return (
        <div className="home">
            <Navigationbar />
            <SearchIDE />
            <h1>Carousel</h1>
            <div className='cardspace'>
                <Row>
                    <Col><Cardsarticles /></Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
    }
}

export default Home;