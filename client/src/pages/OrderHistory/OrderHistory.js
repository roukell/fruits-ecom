import React from 'react';
import { Container } from 'react-bootstrap';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import customerNavbarItems from '../../utils/Data/customerNavbaritems.js';
import './OrderHistory.css';

const OrderHistory = () => {
    return (
        <>
            <Navigation items={customerNavbarItems} />
            <Container className='orderHistoryContainer'>
                Order History
            </Container>
            <Footer />
        </>
    )
}

export default OrderHistory;