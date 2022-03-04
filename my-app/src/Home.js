import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Cardsarticles from './Components/Cardsarticles';
import Footer from './Components/Footer';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';


function Home() {
    return (
        <div className="home">
            <Navigationbar />
            <SearchIDE />
            <h1>Caroussel</h1>
            <div className='cardspace'>
                <Row>
                    <Col><Cardsarticles /></Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default Home;