import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import './Hero.css';
import dashboardImg from '../../assets/images/panel_wtsp.jpg';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

const Hero = () => {
    return (

        <section id="home" className="hero-section bg-white d-flex align-items-center">
            <Container fluid>

                <Row className="align-items-center g-5 justify-content-center">

                    <Col md={6} lg={5} className="text-start text-md-start">

                        <h1 className="text-etno-text-navy fw-bold mb-3 hero-title-prof">
                            EtNo · Soluciones digitales para negocios en movimiento
                        </h1>


                        <p className="lead text-muted-dark mb-5 hero-description-prof">
                            Automatizaciones, paneles de gestión y herramientas a medida para equipos, estudios y emprendedores que buscan crecer sin complicaciones.
                        </p>


                        <Button href="#contacto" variant="primary" size="lg" className="btn-cta-hero-prof px-5 py-3 shadow-sm">
                            <FontAwesomeIcon icon={faRocket} className="me-2" />
                            Impulsá tu Proyecto
                        </Button>
                    </Col>

                    <Col md={6} lg={5} className="d-none d-md-block text-center position-relative">

                        <div className="dashboard-mockup-real rounded-3 shadow-lg p-2 bg-light border">
                            <img
                                src={dashboardImg}
                                alt="Panel de Gestión CRM - Proyecto EtNo"
                                className="img-fluid rounded-2 shadow-sm"
                            />
                        </div>

                        <div className="mockup-blob-real bg-primary opacity-10 rounded-circle position-absolute"></div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Hero;