import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../states/userSlice';



function CustomNavbar() {
  const navigate = useNavigate(); 
  const dispatch = useDispatch(); 

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
           <Navbar.Brand href="/home">Job Portal</Navbar.Brand>
           <Nav className="me-auto">
             <Nav.Link href="/EmployeeDetails">Home</Nav.Link>
             <Nav.Link href="/EmployeeDetails/about">About</Nav.Link>
             <Nav.Link href="/EmployeeDetails/contact">Contact</Nav.Link>
             <Nav.Link href="/EmployeeDetails/jobListings">Job Listings</Nav.Link>
             <Nav.Link href="/EmployeeDetails/companyShowcase">Company Showcase</Nav.Link>
             <Nav.Link href="/EmployeeDetails/jobs">Jobs</Nav.Link>
             <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
           </Nav>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
