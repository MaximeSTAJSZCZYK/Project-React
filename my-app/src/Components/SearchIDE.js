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
            <NavDropdown className="spacing" title="Matériaux" id="basic-nav-dropdown">
              <NavDropdown title="Bois" id="basic-nav-dropdown">
                <NavDropdown.Item href="Article">Article(Category:Bois)</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown className="spacing" title="Couleurs" id="basic-nav-dropdown">
              <NavDropdown title="Rouge" id="basic-nav-dropdown">
                <NavDropdown.Item href="Article">Article(Category:Rouge)</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
            <NavDropdown className="spacing" title="Formes" id="basic-nav-dropdown">
              <NavDropdown title="Rectangulaire" id="basic-nav-dropdown">
                <NavDropdown.Item href="Article">Article(Category:Rectangulaire)</NavDropdown.Item>
              </NavDropdown>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>

  )
}


export default SearchIDE;