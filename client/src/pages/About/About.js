import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import './About.css';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import customerNavbarItems from '../../utils/Data/customerNavbaritems.js';

const About = () => {
    return (
        <>
         <Navigation items={customerNavbarItems} />  
            <Container className='aboutContainer'>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <Image src="image/kawaiiPeach.jpg" className='aboutImg'/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h2>OUR STORY</h2>
                         <br/>
                        <h3>
                           Our company aim to provide premium quality fruits at its freshest.
                           <br/>
                           Most of the time our customers will have to pre-order items, however,
                           occassionally we offer fruits that are already in stock.  
                       </h3>
                        <br/>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default About;