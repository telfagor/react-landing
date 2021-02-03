import React from 'react';
import { Container } from 'react-bootstrap';
import './app-about-me.css';

const AppAboutMe = () => {
    return (
        <Container className="container-about-me">
           <h2 id="about-me">About me</h2>
           <p>My name is Andrei. I am a begginer react developer. I am passionate about creating websites and web applications. This web page is a small confirmation of the knowledge I have. I want to become a good specialist on the market that will benefit your company and society. </p>     
        </Container>
    );
}

export default AppAboutMe;