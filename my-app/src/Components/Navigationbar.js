import React from 'react';
import { BsFillPersonFill, BsFillBasket2Fill, BsBook } from "react-icons/bs";
import { ImHome } from "react-icons/im";
import { Nav, Navbar, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigationbar() {
    return <Navbar bg="light" expand="lg">
                <Container className='navdecor'>
                    <Button variant="light"><Link to="/"><ImHome /></Link></Button>
                    <Button variant='light'><Link style={{ textDecoration: 'none' }} to="/"><Navbar.Brand className='Title'><img src= 'https://cdn.discordapp.com/attachments/947896766798389331/950376930186756176/logotest.png' alt="Logo" />orteaporte</Navbar.Brand></Link></Button>     
                    <div className='NavigationBar'><Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Button variant="light"><Link to=""><BsFillPersonFill /></Link></Button>
                            <Button variant="light"><Link to="/catalog"><BsBook /></Link></Button>
                            <Button variant="light"><Link to="/basket"><BsFillBasket2Fill /></Link></Button>
                        </Nav>
                        
                    </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
}

export default Navigationbar;