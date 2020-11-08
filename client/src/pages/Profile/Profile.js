import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import customerNavbarItems from '../../utils/Data/customerNavbaritems.js';
import './Profile.css';
import API from '../../utils/API.js';

const Profile = () => {
    const [currentCustomer, setCurrentCustomer] = useState('null');

    useEffect(() => {
        const userFromLocal = JSON.parse(localStorage.getItem('user'));

        if (userFromLocal) {
            const username = userFromLocal.username;
            API.getCurrentLoggedInCustomerDetails({
                username: username
            }).then(data => {
                setCurrentCustomer(data.data);
            })
        }
    }, [])

    const profileItems = (
        <>
            <h3>Profile</h3>
            <p>Username: {currentCustomer.username}</p>
            <p>First name: {currentCustomer.firstName}</p>
            <p>Last name: {currentCustomer.lastName}</p>
            <p>Email: {currentCustomer.email}</p>
        </>
    )

    return (
        <>
            <Navigation items={customerNavbarItems} />
            <Container className='profileContainer'>
                {profileItems}
            </Container>
            <Footer />
        </>
    )
}

export default Profile;