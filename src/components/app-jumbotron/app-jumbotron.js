import React from 'react';
import { Jumbotron, Button, Container, Row, Col} from 'react-bootstrap';
import Andrei from '../../images/Andre.jpg';
import Fon from '../../images/fon.jpg'; 
import './app-jumbotron.css';

const AppJumbotron = () => {
    return (        
        <Jumbotron className = "jumbotron-size" >
            <Container className="mr-auto">
                <Row>
                    <Col>
                        <img src = { Andrei } alt="author"  />
                    </Col>
                    <Col>
                <h1>Hello, world!</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.</p>
                                
                <p><a href="../app-about-me/app-about-me.js#about-me"><Button variant="primary" className="button-style">About me</Button></a></p>
                    </Col>
                </Row>                
            </Container>                  
        </Jumbotron>
        
    );
}

export default AppJumbotron;