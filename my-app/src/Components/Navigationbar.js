import React from 'react';
import { BsFillPersonFill, BsFillBasket2Fill } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { ImHome } from "react-icons/im";
import { Nav, Navbar, Container, Button } from 'react-bootstrap';

function Navigationbar() {
    return <Navbar bg="light" expand="lg">
        <Container>
            <Button variant="light" href="basket"><ImHome /></Button>
            <Navbar.Brand className='Title' href="#home">Portaporte</Navbar.Brand>
            <div className='NavigationBar'><Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Button variant="light"><AiOutlineSearch /></Button>
                        <Button variant="light" href=""><BsFillPersonFill /></Button>
                        <Button variant="light" href="basket"><BsFillBasket2Fill /></Button>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Container>
    </Navbar>
}

export default Navigationbar;