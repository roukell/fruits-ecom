import React from 'react';
import Navigation from '../components/Navigation'; 
import Jumbotron from '../components/Jumbotron';
import Card from '../components/Card/Card';

const customerNavbaritems = [
    { name: 'home', label: 'Home', link: '/' },
    { name: 'about', label: 'About', link: '/about' },
    { name: 'preorder', label: 'Pre-Order', link: '/preorder' },
    { name: 'contact', label: 'Contact', link: '/contact' }
  ]

const products = [
    { title: 'apple', text: 'this is an apple', price: '$100/box', image: 'apple.jpg'}
]
  
const Home = () => {
    return(
        <>
        <Navigation items={customerNavbaritems}/>
        <Jumbotron />
        <Card items={products} />
        </>
    )
}

export default Home;