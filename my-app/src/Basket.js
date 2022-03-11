import React from 'react';
import Navigationbar from './Components/Navigationbar';
import SearchIDE from './Components/SearchIDE';
import { Button, Row, Col, Container } from 'react-bootstrap';

function Basket() {
    return (
        <div>
            <Navigationbar />
            <SearchIDE />
            <Container>
                <Row className='baskets margin30'>
                    <Row>
                        <Col sm={{ span: 3, offset: 1 }}>
                        <Row>
                            Card Article 1
                        </Row>
                        <Row>
                            Card Article 1
                        </Row>
                        <Row>
                            Card Article 1
                        </Row>
                        </Col>
                        <Col sm={{ span: 4, offset: 4}}>
                        <Row>
                            Details    
                        </Row>
                        <Row>
                            Details    
                        </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col ClassName='space30' sm={{ span: 3, offset: 1 }}>
                            <Button href="#">Command</Button>
                        </Col>
                        <Col className='space10' sm={{ span: 4, offset: 4 }}>
                            <Row>
                            Totals : ...$   
                            </Row>
                        </Col>
                    </Row>
                </Row>
            </Container>
        </div>
    )
}

export default Basket;