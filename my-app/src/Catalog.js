import React from 'react'
import { Row, Col, Form } from 'react-bootstrap';
/*import Cardsarticles from './Components/Cardsarticles';*/
import Navigationbar from './Components/Navigationbar';


function Catalog() {
    return (
        <div>
            <Navigationbar />
            <Row className='nomargin'>
                <Col className='sidebar' xs={3} sm={2} xl={2} xll={2}>
                    <div className='caraname'>Types :</div>
                    <Form>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Acacia`}
                                />
                            </div>
                        ))}
                    </Form>
                    <div className='caraname'>Materials :</div>
                    <Form>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Bois`}
                                />
                            </div>
                        ))}
                    </Form>
                    <div className='caraname'>Shapes :</div>
                    <Form>
                        {['checkbox'].map((type) => (
                            <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    type={type}
                                    id={`default-${type}`}
                                    label={`Rectangulaire`}
                                />
                            </div>
                        ))}
                    </Form>
                </Col>
                <Col xs={8} sm={10} xl={10} xll={10}>
                    <Row className='space10 catalog'>
                        <Col xs={12} sm={3} xl={3} xll={3}> Ladadaoidhoizdza {/* <Cardsarticles /> */} </Col>
                        <Col xs={12} sm={3} xl={3} xll={3}> Ladadaoidhoizdza{/* <Cardsarticles /> */} </Col>
                        <Col xs={12} sm={3} xl={3} xll={3}> Ladadaoidhoizdza{/* <Cardsarticles /> */} </Col>
                        <Col xs={12} sm={3} xl={3} xll={3}> LadadaoidhoizdzaLadadaoidhoizdza{/* <Cardsarticles /> */} </Col>
                    </Row>
                </Col>
            </Row >
        </div >
    )
}

export default Catalog;