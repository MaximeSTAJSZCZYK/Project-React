import React from 'react'
import { NavDropdown } from 'react-bootstrap'

function SearchIDE() {
    return (
    <div className='Search'>
        <NavDropdown title="Caractéristiques" id="basic-nav-dropdown">
        <NavDropdown title="Matériaux" href="Article" >- Bois</NavDropdown>
        <NavDropdown.Item href="Article">Couleurs</NavDropdown.Item>
        <NavDropdown.Item href="Article">O</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
    </div>

    )
}


export default SearchIDE;