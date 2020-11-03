import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../../components/Card/Card';
import productsData from '../../utils/Data/products.js';
import './Preorder.css';

const Preorder = () => {
    return(
        <>   
        <Container className='preorderContainer'>
            <h3 className='productHeader'>
                PRE-ORDER PRODUCTS
            </h3>
            <Card items={productsData} /> 
        </Container>
        </>
    )
}

export default Preorder;