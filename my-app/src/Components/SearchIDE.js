import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function SearchIDE() {
  return (
    <div className='search'>

      {/*<NavDropdown title="Matériaux" id="basic-nav-dropdown">
        <NavDropdown.Item href="Article">Couleurs</NavDropdown.Item>
        <NavDropdown.Item href="Article">O</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown title="Matériaux" href="Article" >- Bois</NavDropdown>
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
    </NavDropdown>*/}

      <Navbar>
        <Container>
          <Nav className="me-auto">
            <NavDropdown className="spacing" title="Material" id="basic-nav-dropdown">
              <NavDropdown.Item href="Wood">Wood</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="spacing" title="Type" id="basic-nav-dropdown">
              <NavDropdown.Item href="Simple">Simple</NavDropdown.Item>
              <NavDropdown.Item href="Double">Double</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="spacing" title="Shape" id="basic-nav-dropdown">
              <NavDropdown.Item href="Angular">Angular</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>

  )
}


export default SearchIDE;