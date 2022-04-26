/** @format */

import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Placeholder from "react-bootstrap/Placeholder";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";
import logo from "../../../images/logo.webp";

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <div className='text-center'>
      <Navbar collapseOnSelect expand='lg' bg='white' variant='warning'>
        <Container>
          <Navbar.Brand>
            <Link to='/home'>
              <img src={logo} alt='' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mx-auto'>
              <Link to='/home'>Home</Link>
              <Link to='/explore'>Explore</Link>
              <Link to='/about'>About</Link>
            </Nav>
            <Nav>
              <Nav.Link className='me-2' href='#deets'>
                {user.displayName}
              </Nav.Link>
              {user.email ? (
                <div>
                  <Link className='me-2' to='/dashboard'>
                    <button type='button' className='btn btn-dark'>
                      Dashboard
                    </button>
                  </Link>
                  <button
                    type='button'
                    onClick={logOut}
                    className='btn btn-dark'>
                    Log Out
                  </button>
                </div>
              ) : (
                <Link to='/login'>
                  <button type='button' className='btn btn-dark'>
                    Login
                  </button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
