import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHandshake, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';
import logo from '../../assets/images/logo_etno.png';

const Footer = () => {

    const year = new Date().getFullYear();

    return (
        <footer className="footer-section bg-etno-navy text-white py-5">
            <Container>
                <Row className="align-items-center g-4 text-center text-md-start">
                    <Col md={6} className="d-flex flex-column align-items-center align-items-md-start">
                        <div className="d-flex align-items-center mb-3">
                            <img
                                src={logo}
                                alt="EtNo Digital Logo"
                                className="footer-logo me-2 rounded-circle shadow-sm"
                            />
                            <span className="navbar-title fw-bold fs-5 text-white">EtNo Digital</span>
                        </div>

                        <p className="mb-0 text-white-50 fs-7">
                            &copy; {year} EtNo Digital. Todos los derechos reservados.
                        </p>
                        <p className="mb-0 text-white-50 fs-7 italic">
                            Soluciones digitales para negocios en movimiento. Córdoba, Argentina.
                        </p>
                    </Col>

                    <Col md={6} className="d-flex justify-content-center justify-content-md-end gap-3">

                        <a href="mailto:etnodigitalcba@gmail.com" className="footer-icon-link" aria-label="Email">
                            <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        </a>
                        <a href="#" className="footer-icon-link" aria-label="Alianzas Profesionales">
                            <FontAwesomeIcon icon={faHandshake} size="2x" />
                        </a>
                        <a href="https://wa.me/tu-numero" target="_blank" rel="noopener noreferrer" className="footer-icon-link" aria-label="WhatsApp">
                            <FontAwesomeIcon icon={faMobileAlt} size="2x" />
                        </a>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
};

export default Footer;