import React from 'react';
import { Container } from 'react-bootstrap';
import './Contact.css';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import customerNavbarItems from '../../utils/Data/customerNavbaritems.js';

const Contact = () => {
    return (
        <>
            <Navigation items={customerNavbarItems} />
            <Container className='contactContainer'>
                <p>
                    contact page
                </p>
            </Container>
            <Footer />
        </>
    )
}

export default Contact;