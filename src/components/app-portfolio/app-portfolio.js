import React from 'react';
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import './app-portfolio.css';

const AppPortfolio = () => {
    return (    
            <Container className="container-top">
                <h1 className="text-center" id="portfolio">Portfolio</h1>
                <Row>
                    <Col>                 
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg" />
                        </Card>  
                    </Col>
                    
                    <Col>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://rozetked.me/images/uploads/dwoilp3BVjlE.jpg" />
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://i.ytimg.com/vi/lkQ0LDx9jHs/maxresdefault.jpg" />
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://ichef.bbci.co.uk/news/640/cpsprodpb/14236/production/_104368428_gettyimages-543560762.jpg" />
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg" />
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg" />
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '14rem' }}>
                            <Card.Img variant="top" src="https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg" />
                        </Card>
                    </Col>

                    <Col>
                        <Card style={{ width: '220px' }}>
                            <Card.Img variant="top" src="https://undark.org/wp-content/uploads/2020/02/GettyImages-1199242002-1-scaled.jpg" />
                        </Card>
                    </Col>
                </Row>
            </Container> 
    );
}
//
export default AppPortfolio;