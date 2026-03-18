import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './ProyectoEstrella.css';


import crmChatsImg from '../../assets/images/panel_wtsp.jpg';
import petShopImg from '../../assets/images/ecommerce.png';
import micrositioImg from '../../assets/images/empresas.jpg';


const proyectos = [
    {
        titulo: 'CRM de Chats y Gestión Multiagente',
        descripcion: 'Centralizá tus ventas por WhatsApp. Atendé a todos tus clientes desde un solo lugar.',
        imagen: crmChatsImg,
        cta: 'Impulsá tu Proyecto',
    },
    {
        titulo: 'E-commerce Pet Shop Autogestionable',
        descripcion: 'Llevá tu negocio a internet. Tienda online autogestionable con gestión de stock integrada.',
        imagen: petShopImg,
        cta: 'Impulsá tu Proyecto',
    },
    {
        titulo: 'Micrositio de Visualización de Datos Empresariales',
        descripcion: 'Tus datos, siempre a mano. Un panel personalizado para tomar mejores decisiones en tiempo real.',
        imagen: micrositioImg,
        cta: 'Impulsá tu Proyecto',
    },
];

const ProyectosEstrella = () => {
    return (

        <section id="portfolio" className="proyectos-section bg-white py-5">
            <Container>

                <Row className="justify-content-center text-center mb-5">
                    <Col md={10} lg={8}>

                        <h2 className="display-4 text-etno-text-navy fw-bold mb-3">
                            Proyectos Estrella
                        </h2>
                        <p className="lead text-muted-dark">
                            Nuestras soluciones destacadas demuestran cómo impulsamos el crecimiento y optimizamos los procesos de emprendedores y pequeñas empresas.
                        </p>
                    </Col>
                </Row>


                <Row className="justify-content-center g-4">

                    {proyectos.map((proyecto, index) => (
                        <Col key={index} md={6} lg={4}>
                            <Card className="proyecto-card h-100 text-center shadow-sm border-0 bg-white">

                                <Card.Img
                                    variant="top"
                                    src={proyecto.imagen}
                                    alt={proyecto.titulo}
                                    className="proyecto-img rounded-2"
                                />
                                <Card.Body className="p-4 d-flex flex-column">

                                    <Card.Title className="h5 fw-bold mb-3 text-etno-text-navy">
                                        {proyecto.titulo}
                                    </Card.Title>

                                    <Card.Text className="text-muted-dark mb-4">
                                        {proyecto.descripcion}
                                    </Card.Text>
                                    <Button href="#contacto" variant="primary" className="btn-cta-proyecto-prof mt-auto px-4 py-2 shadow-sm">
                                        {proyecto.cta}
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default ProyectosEstrella;