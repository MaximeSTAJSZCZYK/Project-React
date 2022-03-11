import React, { Component } from 'react';
/*import Cardsarticles from './Components/Cardsarticles';*/
import { Card } from 'react-bootstrap';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';
import { Container, Row, Col, Button } from 'react-bootstrap';

class Article extends Component {

    constructor(props) {
        super(props)
        this.state = {
            articles: []
        }
    }

    componentDidMount = async () => {
        const queryString = await window.location.search;
        const urlParams = await new URLSearchParams(queryString);
        const ID = await urlParams.get("ID")

        const response = await fetch('http://localhost:1337/api/articles/' + ID + '?populate=*', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        )
        const articles = await response.json()
        this.setState({ articles: articles })
    }

    render() {
        console.log(this.state.articles.data && this.state.articles.data.attributes)
        return (
            <div>
                <Navigationbar />
                <SearchIDE />
                <Row>
                    <Col className='space30' sm={{ span: 10, offset: 1 }}>
                        <div className="articles articlecard">
                            <Container className='nomargin space30'>
                                <Row>
                                    <Col sm={5}>
                                        <Card>
                                            <Card.Img variant="top" src={this.state.articles.data && 'http://localhost:1337' + this.state.articles.data.attributes.Picture.data.attributes.url} />
                                            <Card.Body>
                                                <Card.Title className='separation'>{this.state.articles.data && this.state.articles.data.attributes.Name}</Card.Title>
                                                <Card.Text>
                                                    {this.state.articles.data && this.state.articles.data.attributes.Price + '$'}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                    <Col sm={7}>
                                        <Row className='space10'>
                                            <Col sm={6}>
                                                Name : {this.state.articles.data && this.state.articles.data.attributes.Name}
                                            </Col>
                                            <Col className='nopadding' sm={6}>
                                                Material : {this.state.articles.data && this.state.articles.data.attributes.Material}
                                            </Col>
                                            <Row className='space30'>
                                                <Col sm={6}>
                                                    Shape : {this.state.articles.data && this.state.articles.data.attributes.Shape}
                                                </Col>
                                                <Col sm={6}>
                                                    Type : {this.state.articles.data && this.state.articles.data.attributes.Type}
                                                </Col>
                                            </Row>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row className="space10" >
                                    <Col sm={{ span: 3, offset: 8 }}><Button href="#">Add to cart</Button></Col>
                                </Row>
                            </Container>
                        </div>
                    </Col>
                    <Col sm={1}></Col>
                </Row>
            </div>
        )
    }
}

export default Article;