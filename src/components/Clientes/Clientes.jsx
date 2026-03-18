import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faChartLine } from '@fortawesome/free-solid-svg-icons';
import './Clientes.css';

const Clientes = () => {
    return (
        <section id="clientes" className="clientes-section bg-light py-5">
            <Container>
                <Row className="justify-content-center text-center mb-5">
                    <Col md={10} lg={8}>
                        <h2 className="display-4 text-etno-text-navy fw-bold mb-3">
                            ¿A quién ayudamos?
                        </h2>
                        <p className="lead text-muted-dark">
                            Nos especializamos en brindar soluciones digitales que optimizan procesos y potencian el crecimiento de dos perfiles clave.
                        </p>
                    </Col>
                </Row>

                <Row className="justify-content-center g-4">
                    <Col md={6} lg={5} xl={4}>
                        <Card className="cliente-card h-100 text-center shadow-sm border-0 bg-white">
                            <Card.Body className="p-5">

                                <div className="icon-container-prof bg-primary-light text-etno-lila mb-4 rounded-circle d-flex align-items-center justify-content-center mx-auto shadow-sm">
                                    <FontAwesomeIcon icon={faRocket} size="2x" />
                                </div>

                                <Card.Title className="h3 fw-bold mb-3 text-etno-text-navy">🚀 Para emprendedores</Card.Title>

                                <Card.Text className="text-muted-dark fs-5">
                                    Automatizá tareas repetitivas y ganá horas para lo que importa. Sistemas simples que crecen con vos.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} lg={5} xl={4}>
                        <Card className="cliente-card h-100 text-center shadow-sm border-0 bg-white">
                            <Card.Body className="p-5">
                                <div className="icon-container-prof bg-primary-light text-etno-lila mb-4 rounded-circle d-flex align-items-center justify-content-center mx-auto shadow-sm">
                                    <FontAwesomeIcon icon={faChartLine} size="2x" />
                                </div>
                                <Card.Title className="h3 fw-bold mb-3 text-etno-text-navy">📈 Para pequeñas empresas</Card.Title>
                                <Card.Text className="text-muted-dark fs-5">
                                    Visualizá métricas clave, optimizá procesos y tomá mejores decisiones. Datos claros para negocios que quieren escalar.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Clientes;