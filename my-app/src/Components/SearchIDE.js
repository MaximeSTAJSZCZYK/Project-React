import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function SearchIDE() {
  return (
    <div className='search'>

      <Navbar>
        <Container>
          <Nav className="me-auto">
            <NavDropdown className="spacing" title="Material" id="basic-nav-dropdown">
              <NavDropdown.Item href="Catalog">Wood</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="spacing" title="Type" id="basic-nav-dropdown">
              <NavDropdown.Item href="Catalog">Simple</NavDropdown.Item>
              <NavDropdown.Item href="Catalog">Double</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown className="spacing" title="Shape" id="basic-nav-dropdown">
              <NavDropdown.Item href="Catalog">Angular</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>

  )
}


export default SearchIDE;