import React from 'react';
import Carousel from '../../components/Carousel/Carousel';
import Card from '../../components/Card/Card';
import Alert from '../../components/Alert/Alert';
import productsData from '../../utils/Data/products.js';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import customerNavbarItems from '../../utils/Data/customerNavbaritems.js';

const Home = () => {
    return(
        <>
        <Navigation items={customerNavbarItems} />   
        <Alert />
        <Carousel />
        <h3>
        BEST SELLERS
        </h3>
        <Card items={productsData} />
        <Footer />
        </>
    )
}

export default Home;