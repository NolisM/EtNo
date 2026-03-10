import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/logo_etno.png';
import './Header.css';



const Header = () => {
    return (

        <Navbar bg="white" expand="lg" fixed="top" className="custom-navbar shadow-sm">
            <Container>

                <Navbar.Brand href="#home" className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="Etno Digital Logo"
                        className="navbar-logo d-inline-block align-top"
                    />

                    <span className="navbar-title ms-2 text-primary fw-bold">Etno Digital</span>
                </Navbar.Brand>


                <Navbar.Toggle aria-controls="basic-navbar-nav" />


                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto align-items-center">
                        <Nav.Link href="#servicios" className="nav-item-custom">Servicios</Nav.Link>
                        <Nav.Link href="#portfolio" className="nav-item-custom">Portfolio</Nav.Link>
                        <Nav.Link href="#nosotros" className="nav-item-custom">Nosotros</Nav.Link>
                        <Nav.Link href="#contacto" className="nav-item-custom">Contacto</Nav.Link>


                        <Nav.Link href="#contacto" className="btn-cta ms-lg-3 mt-3 mt-lg-0">
                            <FontAwesomeIcon icon={faRocket} className="me-2" />
                            Impulsá tu Proyecto
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;