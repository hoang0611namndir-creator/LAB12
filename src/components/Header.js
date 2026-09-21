import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import {FAShoppingCart} from 'react-icons/fa';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary w-100">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">
          
                    <Nav>
                      <Nav.Link>SHOP FASHION</Nav.Link>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link >Products</Nav.Link>
            <Nav.Link>Men</Nav.Link>
            <Nav.Link>Women</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>{FAShoppingCart} Cart</Nav.Link>
            
          </Nav>


        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
