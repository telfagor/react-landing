import React from 'react';
import AppHeader from '../app-header';
import AppJumbotron from '../app-jumbotron';
import AppCarousel from '../app-carousel';
import AppAboutMe from '../app-about-me';
import AppServices from '../app-services';
import AppPortfolio from '../app-portfolio';
import AppContact from '../app-contact';
import AppFooter from '../app-footer';
import './app.css'; 

const App = () => {
    return (
        <div>
            <AppHeader />  
            <AppJumbotron />
            <AppCarousel />
            <AppServices />
            <AppAboutMe />
            <AppPortfolio />  
            <AppContact />
            <AppFooter />
        </div>
    );
}

export default App;