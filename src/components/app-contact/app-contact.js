import React from 'react';
import { Card, Container, Row, Col, Button, Form } from 'react-bootstrap';
import './app-contact.css';

const AppContact = () => {
    return (
        <Container className="container-form">
            <h2 className="text-center" id="contact">Contact with me</h2>
            <Form noValidate className="form">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Please enter your name" />
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Your email:</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Your message"/>
                </Form.Group>
                <Button className="button-right" onclick="document.querySelector('.button-right')">Submit</Button>
            </Form>
            <a href="#">to top</a>
        </Container>        
    );
}

export default AppContact;