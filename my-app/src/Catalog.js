import React from 'react'
import {Row, Col} from 'react-bootstrap';
/*import Cardsarticles from './Components/Cardsarticles';*/
import Navigationbar from './Components/Navigationbar';


function Catalog() {
    return (
        <div>
            <Navigationbar />
                <Row className='nomargin'>
                    <Col  className='sidebar' xs={3} sm={2} xl={2} xll={2}>Sidebar</Col>
                    <Col xs={8} sm={10} xl={10} xll={10}>
                        <Row className='space10 catalog'>
                            <Col xs={12} sm={3} xl={3} xll={3}> Ladadaoidhoizdza {/* <Cardsarticles /> */} </Col>
                            <Col xs={12} sm={3} xl={3} xll={3}> Ladadaoidhoizdza{/* <Cardsarticles /> */} </Col>
                            <Col xs={12} sm={3} xl={3} xll={3}> Ladadaoidhoizdza{/* <Cardsarticles /> */} </Col>
                            <Col xs={12} sm={3} xl={3} xll={3}> LadadaoidhoizdzaLadadaoidhoizdza{/* <Cardsarticles /> */} </Col>
                        </Row>    
                    </Col>
                </Row>
        </div>
    )
}

export default Catalog;