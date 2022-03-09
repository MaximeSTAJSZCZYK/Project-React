import React, { Component } from 'react';
import Cardsarticles from './Components/Cardsarticles';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';
import { Container, Row, Col } from 'react-bootstrap';

<<<<<<< Updated upstream
class Article extends Component {
    render() {
        return (
            <div>
                <Navigationbar />
                <SearchIDE />
                <div className="articlesg">
                    <div className="articles">
                        <Cardsarticles />
                        <div className="Col">
                            <div className="caracteristics">Name</div> Porte en bois<br></br>
                            <div className="caracteristics">Material</div> Bois<br></br>
                        </div>
                        <div className="Col">
                            <div className="caracteristics">Shape</div> Rectangulaire <br></br>
                            <div className="caracteristics">Type</div> <br></br>
                        </div>
                    </div>
                    <div className="price">Price is "..."$</div>
                </div>
            </div>
        )
    }
=======
function Articles() {
    return (
        <div>
            <Navigationbar />
            <SearchIDE />
            <Row>
                <Col sm={1}></Col>
                <Col className='space30' sm={10}>
                    <div className="articles articlecard">
                        <Container className='nomargin space30'>
                            <Row>
                                <Col sm={5}>
                                    <Cardsarticles />
                                </Col>
                                <Col sm={7}>
                                    <Row className='space10'>
                                        <Col sm={6}>
                                            Name : Porte en bois
                                        </Col>
                                        <Col className='nopadding' sm={6}>
                                            Material : Bois
                                        </Col>
                                        <Row className='space30'>
                                            <Col sm={6}>
                                                Shape : Rectangulaire
                                            </Col>
                                            <Col sm={6}>
                                                Type : Neuve
                                            </Col>
                                        </Row>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={8}></Col>
                                <Col sm={3}>Button</Col>
                                <Col sm={1}></Col>
                            </Row>
                        </Container>
                    </div>
                </Col>
                <Col sm={1}></Col>
            </Row>
        </div>
    )
>>>>>>> Stashed changes
}

export default Article;