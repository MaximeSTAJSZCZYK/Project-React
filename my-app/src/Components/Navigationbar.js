import React from 'react'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

function Navigationbar() {
    return <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className='title'href="#home">Portaporte</Navbar.Brand>
                    <div className='navigationbar'><Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">Rechercher</Nav.Link>
                            <Nav.Link href="Article">Profil</Nav.Link>
                            <NavDropdown title="Panier" href="Basket" >Articles achetès</NavDropdown>
                        </Nav>
                        *
                    </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
}

export default Navigationbar;