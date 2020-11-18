import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../../components/Card/Card';
import productsData from '../../utils/Data/products';
import './Preorder.css';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import customerNavbarItems from '../../utils/Data/customerNavbaritems';

const Preorder = () => (
    <>
        <Navigation items={customerNavbarItems} />
        <Container className='preorderContainer'>
            <h3 className='productHeader'>
                    PRE-ORDER PRODUCTS
            </h3>
            <Card items={productsData} />
        </Container>
        <Footer />
    </>
);

export default Preorder;
