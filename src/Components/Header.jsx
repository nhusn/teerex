import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar expand="lg" className="bg-dark text-light">
      <Container>
        <Navbar.Brand href="#home"><Link to={'/'} style={{ textDecoration: "none", color: "white" }}>TeeRex</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ms-auto text-light">
          <Link style={{ textDecoration: "none", color: "white",marginRight:'10px' }} to={'/'}>Home</Link>
            <Link style={{ textDecoration: "none", color: "white",marginRight:'10px' }} to={'/wishlist'}>Wishlist</Link>
            <Link style={{ textDecoration: "none", color: "white" }} to={'/cart'}>Cart</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header