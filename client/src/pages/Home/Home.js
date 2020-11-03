import React from 'react';
import Card from '../../components/Card/Card';
import Alert from '../../components/Alert/Alert';
import productsData from '../../utils/Data/products.js';
import Carousel from '../../components/Carousel/Carousel';

const Home = () => {
    return(
        <>
        <Alert />
        <Carousel />
        <h3>
        BEST SELLERS
        </h3>
        <Card items={productsData} />
        </>
    )
}

export default Home;