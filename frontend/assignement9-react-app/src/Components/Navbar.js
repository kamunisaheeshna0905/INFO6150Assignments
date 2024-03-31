import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function CustomNavbar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
           <Navbar.Brand href="#home">Job Portal</Navbar.Brand>
           <Nav className="me-auto">
             <Nav.Link href="/">Home</Nav.Link>
             <Nav.Link href="/about">About</Nav.Link>
             <Nav.Link href="/contact">Contact</Nav.Link>
             <Nav.Link href="/jobListings">Job Listings</Nav.Link>
             <Nav.Link href="/companyShowcase">Company Showcase</Nav.Link>
           </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
