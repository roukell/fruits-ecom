import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import customerNavbarItems from '../../utils/Data/customerNavbaritems.js';
import './Profile.css';

const Profile = () => {
    return (
        <>
            <Navigation items={customerNavbarItems} />
            <Container className='profileContainer'>
                    Profile
            </Container>
            <Footer />
        </>
    )
}

export default Profile;