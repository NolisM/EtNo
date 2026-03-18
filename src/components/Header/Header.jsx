import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import logo from '../../assets/images/logo_etno.png';

const Header = () => {
    return (
        <Navbar bg="white" expand="lg" fixed="top" className="custom-navbar shadow-sm border-bottom">
            <Container>
                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="EtNo Digital Logo"
                        className="navbar-logo d-inline-block align-top me-2"
                    />
                    <span className="navbar-title fw-bold text-etno-text-navy">EtNo Digital</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#portfolio" className="nav-link-prof">Proyectos</Nav.Link>
                        <Nav.Link href="#clientes" className="nav-link-prof">Clientes</Nav.Link>
                        <Nav.Link href="#portfolio" className="nav-link-prof">Portfolio</Nav.Link>
                        <Nav.Link href="#contacto" className="nav-link-prof">Contacto</Nav.Link>
                        <Button href="#contacto" variant="primary" className="btn-cta-header-prof ms-lg-3 mt-3 mt-lg-0 px-4 py-2 rounded-2 shadow-sm">
                            <FontAwesomeIcon icon={faRocket} className="me-2" />
                            Impulsá tu Proyecto
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;