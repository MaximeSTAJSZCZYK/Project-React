import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

function Footer() {

    return (
        <div className='deco'>
        <Container className='margin30 space30'>
            <Row>
                <Col xs="6" sm='3' xl='3' xll='3'>
                Première col
                </Col>
                <Col xs="6" sm='3' xl='3' xll='3'>
                Deuxième col
                </Col>
                <Col xs="6" sm='3' xl='3' xll='3'>
                Troisième col
                </Col>
                <Col xs="6" sm='3' xl='3' xll='3'>
                Quatrième col
                </Col>
            </Row>
        </Container>
        </div>
    )

}

export default Footer;