import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../../components/Card/Card';
import productsData from '../../utils/Data/products.js';
import './Preorder.css';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import customerNavbarItems from '../../utils/Data/customerNavbaritems.js';

const Preorder = () => {
    return(
        <>   
        <Navigation items={customerNavbarItems} /> 
        <Container className='preorderContainer'>
            <h3>
                Pre-Order Products
            </h3>
            <Card items={productsData} /> 
        </Container>
        <Footer />
        </>
    )
}

export default Preorder;