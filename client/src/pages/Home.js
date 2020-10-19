import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import Card from '../components/Card/Card';
import Alert from '../components/Alert';
import productsData from './Data/products';

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