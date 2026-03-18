import React, { useState, useRef } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import './Contacto.css';
import crmChatsImg from '../../assets/images/panel_wtsp.jpg';
import petShopImg from '../../assets/images/ecommerce.png';
import micrositioImg from '../../assets/images/empresas.jpg';

const Contacto = () => {
    const form = useRef();
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setLoading(true);
        setStatus(null);
        const serviceID = 'service_pgojtug';
        const templateID = 'template_9mfjjpl';
        const userID = 'OClRLU5y4rqiTiw0B';
        emailjs.sendForm(serviceID, templateID, form.current, userID)
            .then((result) => {
                setStatus('success');
                form.current.reset();
            }, (error) => {
                setStatus('error');
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <section id="contacto" className="contacto-section py-5 bg-light">
            <Container>

                <Row className="justify-content-center text-center mb-5">
                    <Col md={8}>
                        <h2 className="display-4 text-etno-text-navy fw-bold mb-3">Contacto</h2>
                        <p className="lead text-muted-dark">
                            ¿Tenés un proyecto en mente? Hablemos y busquemos la mejor solución digital para tu negocio.
                        </p>
                    </Col>
                </Row>

                <Row className="g-5">

                    <Col lg={5}>
                        <div className="contact-info-card p-4 rounded-3 shadow-sm bg-white h-100">
                            <h4 className="text-etno-text-navy fw-bold mb-4">Información de contacto</h4>

                            <div className="d-flex align-items-center mb-4">
                                <div className="contact-icon-box me-3">
                                    <FontAwesomeIcon icon={faEnvelope} className="text-etno-lila" />
                                </div>
                                <div>
                                    <p className="mb-0 fw-bold text-etno-text-navy">Email</p>
                                    <p className="mb-0 text-muted-dark">etnodigitalcba@gmail.com</p>
                                </div>
                            </div>

                            <div className="d-flex align-items-center mb-4">
                                <div className="contact-icon-box me-3">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-etno-lila" />
                                </div>
                                <div>
                                    <p className="mb-0 fw-bold text-etno-text-navy">Ubicación</p>
                                    <p className="mb-0 text-muted-dark">Córdoba, Argentina (Remoto para el mundo)</p>
                                </div>
                            </div>

                            <div className="mt-5 p-4 rounded-3 bg-primary-light">
                                <p className="mb-0 text-etno-text-navy italic">
                                    "Ayudamos a que la tecnología trabaje para vos, no al revés."
                                    )</p>
                            </div>
                        </div>
                    </Col>


                    <Col lg={7}>

                        <Form
                            ref={form}
                            className="contact-form p-4 rounded-3 shadow-sm bg-white"
                            onSubmit={handleSubmit}
                        >


                            {status === 'success' && (
                                <Alert variant="success" className="mb-4">
                                    ¡Gracias! Tu mensaje ha sido enviado con éxito a través de EmailJS. Te responderemos pronto.
                                </Alert>
                            )}
                            {status === 'error' && (
                                <Alert variant="danger" className="mb-4">
                                    Ups, hubo un problema al enviar tu mensaje con EmailJS. Por favor, intentalo de nuevo más tarde o envianos un email directamente.
                                </Alert>
                            )}

                            <Row>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formNombre">
                                        <Form.Label className="fw-bold text-etno-text-navy">Nombre</Form.Label>

                                        <Form.Control
                                            type="text"
                                            name="from_name"
                                            placeholder="Tu nombre"
                                            className="custom-input"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                                <Col md={6} className="mb-3">
                                    <Form.Group controlId="formEmail">
                                        <Form.Label className="fw-bold text-etno-text-navy">Email</Form.Label>

                                        <Form.Control
                                            type="email"
                                            name="from_email"
                                            placeholder="nombre@empresa.com"
                                            className="custom-input"
                                            required
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <Form.Group className="mb-3" controlId="formAsunto">
                                <Form.Label className="fw-bold text-etno-text-navy">¿En qué podemos ayudarte?</Form.Label>

                                <Form.Select
                                    name="asunto"
                                    className="custom-input"
                                    required
                                >
                                    <option value="">Seleccioná una opción</option>
                                    <option value="Automatización de procesos">Automatización de procesos</option>
                                    <option value="E-commerce / Tienda Online">E-commerce / Tienda Online</option>
                                    <option value="Panel de datos / CRM">Panel de datos / CRM</option>
                                    <option value="Otro proyecto">Otro proyecto</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group className="mb-4" controlId="formMensaje">
                                <Form.Label className="fw-bold text-etno-text-navy">Mensaje</Form.Label>

                                <Form.Control
                                    as="textarea"
                                    name="mensaje"
                                    rows={4}
                                    placeholder="Contanos brevemente tu idea..."
                                    className="custom-input"
                                    required
                                />
                            </Form.Group>

                            <Button
                                variant="primary"
                                type="submit"
                                className="w-100 py-3 fw-bold shadow-sm"
                                disabled={loading}
                            >
                                <FontAwesomeIcon icon={faPaperPlane} className="me-2" />
                                {loading ? 'Enviando...' : 'Enviar Mensaje'}
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contacto;