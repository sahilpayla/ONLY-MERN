import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import './Headers.css';

const Headers = () => {
  return (
    <>
      <Navbar className="navbar-main"
      >
        <Container>
          <NavLink to="/" className="navbar home">Home</NavLink>
          <Nav className="me-auto">
            <NavLink to="/register" className="navbar register">Register</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Headers