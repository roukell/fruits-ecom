import React from 'react';
import { Container, Col, Image, Row, Card } from 'react-bootstrap';
import './About.css';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import customerNavbarItems from '../../utils/Data/customerNavbaritems.js';

const About = () => {
    return (
        <>
            <Navigation items={customerNavbarItems} />
            <Container className='aboutContainer'>
                <Row className="justify-content-md-center">
                    <Col md={{ span: 6, offset: 3 }}>
                        <Card.Img src="image/kawaiiPeach.jpg" className='aboutImg' variant='top' />
                    </Col>
                </Row>
                <Row className='aboutRow'>
                    <Col md={{ span: 6, offset: 3 }}>
                        <h2>OUR STORY</h2>
                        <br />
                        <p>
                            Our company aim to provide premium quality fruits at its freshest.
                            <br />
                            <br />
                           Pure fruit started in late 1990s with logistic service only. In 2018, we decided to transit into direct fruit sales business that allows our customers to pre-order imported fruits.
                           <br />
                           <br />
                           Most of the time our customers will have to pre-order items, however,
                           occasionally we offer fruits that are already in stock.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default About;