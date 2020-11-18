import React from 'react';
import Card from '../../components/Card/Card';
import productsData from '../../utils/Data/products';
import Carousel from '../../components/Carousel/Carousel';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import customerNavbarItems from '../../utils/Data/customerNavbaritems';

const Home = () => (
    <>
        <Navigation items={customerNavbarItems} />
        <Carousel />
        <h3>
        BEST SELLERS
        </h3>
        <Card items={productsData} />
        <Footer/>
    </>
);

export default Home;
