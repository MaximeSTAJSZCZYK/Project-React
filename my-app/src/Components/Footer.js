import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

function Footer() {

    return (
        <div className='deco'>
            <Container className='margin30 space30'>
                <Row>
                    <Col xs="12" sm='5' xl='5' xll='5'>
                        <div className='foont'>Aide & contacts</div>
                        <Row className='space10'>
                            Nous joindre :
                        </Row>
                        <Row>
                            <Col sm='4'>
                                <Row class="nomargin space10">
                                    STAJSZCZYK Maxime
                                    <Row>
                                        <a href="https://www.linkedin.com/in/maxime-stajszczyk-3580851a1/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn"></img></a>
                                    </Row>
                                </Row>
                            </Col>
                            <Col sm='4'>
                                <Row class="nomargin space10">
                                    DURAND Tristan
                                    <Row>
                                        <a href="https://www.linkedin.com/in/tristan-durand-54b9bb222/" target="_blank"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png" alt="LinkedIn"></img></a>
                                    </Row>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm='3' xl='3' xll='3'>
                        <Row className='foont'>
                            Moyen de payement :
                        </Row>
                        <Row>
                            <Col>
                                <img src="https://img2.freepng.fr/20171220/kke/mastercard-logo-png-5a3a1f282e6103.818127331513758504194124.jpg"></img>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="12" sm={{span: 3, offset: 1}} xl='3' xll='3'>
                    <img src= 'https://cdn.discordapp.com/attachments/947896766798389331/950376930186756176/logotest.png' alt="Logo" />orteaporte
                    <Row className='space10'>
                        Entreprise
                    </Row>
                    <Row className='space10'>
                        Emplois
                    </Row>
                    <Row className='space10'>
                        Livraisons
                    </Row>
                    </Col>
                </Row>
                <Row className='space30'>
                  Mentions légales | Protection des données | CGV | *Conditions des offres | Paramètres des données
                </Row>
            </Container>
        </div>
    )

}

export default Footer;