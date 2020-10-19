import React from 'react';
import { Container } from 'react-bootstrap';
import Card from '../../components/Card/Card';
import productsData from '../Data/products';
import './Preorder.css';

const Preorder = () => {
    return(
        <>   
        <Container className='preorderContainer'>
            <h3>
                Pre-Order Products
            </h3>
            <Card items={productsData} /> 
        </Container>
        </>
    )
}

export default Preorder;