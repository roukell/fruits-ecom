import React from 'react';
import Navigation from '../components/Navigation/Navigation'; 
import Carousel from '../components/Carousel/Carousel';
import Card from '../components/Card/Card';
import Alert from '../components/Alert';
import customerNavbarItems from './Data/customerNavbaritems';
import productsData from './Data/products';


const Home = () => {
    return(
        <>
        <Navigation items={customerNavbarItems}/>
        <Alert />
        <Carousel />
        <Card items={productsData} />
        </>
    )
}

export default Home;