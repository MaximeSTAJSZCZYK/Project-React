import React, { Component } from 'react';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';
import { Button, Row, Col, Container } from 'react-bootstrap';
import { AiFillMinusCircle } from "react-icons/ai";
import { Link } from 'react-router-dom';

class Basket extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        console.log(Number(localStorage.getItem('totalPrice')))
        return (
            <div>
                <Navigationbar />
                <SearchIDE />
                <Container>
                    <Row className='baskets margin30'>
                        <Row>
                            <Col sm={{ span: 3, offset: 1 }}>
                                {
                                    localStorage.getItem('basketArticles') && localStorage.getItem('basketArticles').length > 0 &&
                                    JSON.parse(localStorage.getItem('basketArticles')).map((basketArticles, i) =>
                                        <Row>
                                            <Col>
                                                {basketArticles.data.attributes.Name + ' '}
                                            </Col>
                                            <Col sm={{ span: 1 }}>
                                                <Button variant="danger" size="sm" onClick={() => this.props.updateBasket(basketArticles, basketArticles.id, false)}><AiFillMinusCircle /></Button>
                                            </Col>
                                        </Row>
                                    )
                                }
                            </Col>
                            <Col sm={{ span: 4, offset: 4 }}>
                                {
                                    localStorage.getItem('basketArticles') && localStorage.getItem('basketArticles').length > 0 &&
                                    JSON.parse(localStorage.getItem('basketArticles')).map((basketArticles, i) =>
                                        <Row>
                                            {basketArticles.data.attributes.Price + '$'}
                                        </Row>
                                    )
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col ClassName='space30' sm={{ span: 3, offset: 1 }}>
                                <Button href="#">Command</Button>
                            </Col>
                            <Col className='space10' sm={{ span: 4, offset: 4 }}>
                                <Row>
                                    Total : {localStorage.getItem('totalPrice')} $
                                </Row>
                            </Col>
                        </Row>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Basket;