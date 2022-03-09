import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
import Cardsarticles from './Components/Cardsarticles';
import Navigationbar from './Components/Navigationbar';

import { Row, Col } from 'react-bootstrap';
import Cardsarticles from './Components/Cardsarticles';
import Navigationbar from './Components/Navigationbar';


function Catalog(props) {
  console.log(props)
  return (
    <div>
      <Navigationbar />
      <Row className='nomargin'>
        <Col className='sidebar' xs={3} sm={2} xl={2} xll={2}>Sidebar</Col>
        <Col xs={8} sm={10} xl={10} xll={10}>
          <Row className='space10 catalog'>
            {
              props.articles.data &&
              props.articles.data.map((articles, i) =>
                <Col xs={12} sm={4} xl={4} xll={4}>
                  <Cardsarticles articles={articles} />
                </Col>)}
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Catalog;