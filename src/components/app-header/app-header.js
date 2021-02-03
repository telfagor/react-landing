import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import './app-header.css';

const AppHeader = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    Exam
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link className="text-decoration" href="/">Home</Nav.Link>
                        <Nav.Link className="text-decoration" href="../app-services/app-services.js#services">Services</Nav.Link>
                        <Nav.Link className="text-decoration" href="../app-portfolio/app-portfolio.js#portfolio">Portfolio</Nav.Link>
                        <Nav.Link className="text-decoration" href="../app-contact/app-contact.js#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav.Link href="https://facebook.com" target="_blank"><FontAwesomeIcon icon={faFacebook} className="social-icon"/></Nav.Link>
                    <Nav.Link href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faInstagram} className="social-icon"/></Nav.Link>
                    <Nav.Link href="https://vk.com/" target="_blank"><FontAwesomeIcon icon={faVk} className="social-icon"/></Nav.Link>
                </Navbar.Collapse>    
            </Container>
        </Navbar>
    );
}

export default AppHeader;