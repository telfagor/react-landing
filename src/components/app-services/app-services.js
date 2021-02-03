import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Layout from '../../images/layout.png';
import JS from '../../images/js.png';
import react from '../../images/react.png';

import './app-services.css';

const AppServices = () => {
    return (
        <Container className="mr-auto">
            <h2 id="services">Services</h2>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>Layout
                            <img src = {Layout} alt="layout" class="img-services"/> 
                        </Card.Header>    
                        <Card.Body>
                            <Card.Title>Layout of different web-layouts</Card.Title>
                            <Card.Text>
                            I can make up simple web layouts. I always follow the pixel perfect principle.
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Header>JavaScript
                        <img src = {JS} alt="JavaScript" class="img-services"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Javascript Programmer</Card.Title>
                            <Card.Text>
                            I have average knowledge of Javascript. Also have knowledge of algorithms and data structures.
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <Card.Header>React
                        <img src = {react} alt="React" class="img-services"/>
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>Begginer React Developer</Card.Title>
                            <Card.Text>
                            React programming skills
                            </Card.Text>                            
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default AppServices;