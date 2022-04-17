import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/Logo.svg';
import './Header.css';



const Header = () => {

const[user]=useAuthState(auth);
const handelSignout = () =>{
  signOut(auth);
}
    return (
        <div>
            <Navbar className="py-3 " collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/" className="tittle-name">AR-PHOTOGRAPHY</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/blog">Blogs</Nav.Link>
      <Nav.Link as={Link} to="/checkout">CheckOut</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/aboutme">About Me</Nav.Link>
     {
       user ? <button className='logOut-btn' onClick={handelSignout} >Log Out</button> :  <Nav.Link as={Link} to="/login">
       Login
      </Nav.Link>
     }
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
       

};

export default Header;