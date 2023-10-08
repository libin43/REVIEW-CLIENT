import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css';

export const NavBar = () => {
    return (
        <Navbar expand="lg" data-bs-theme="dark" className="custom-navbar">
            <Container>
                <Navbar.Brand href="/">Review Application</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav-light">
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Item>
                            <NavLink to="/" className="nav-link" activeClassName="active">
                                Home
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/review" className="nav-link" activeClassName="active">
                                Review
                            </NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink to="/result" className="nav-link" activeClassName="active">
                                Result
                            </NavLink>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
