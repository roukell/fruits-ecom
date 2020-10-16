import React from 'react';
import Navigation from '../components/Navigation'; 
import Jumbotron from '../components/Jumbotron';

const customerNavbaritems = [
    { name: 'home', label: 'Home', link: '/' },
    { name: 'about', label: 'About', link: '/about' },
    { name: 'preorder', label: 'Pre-Order', link: '/preorder' },
    { name: 'contact', label: 'Contact', link: '/contact' }
  ]
  
const Home = () => {
    return(
        <>
        <Navigation items={customerNavbaritems}/>
        <Jumbotron />
        </>
    )
}

export default Home;