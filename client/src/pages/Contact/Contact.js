import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Contact.css';
import Navigation from '../../components/Navigation/Navigation.js';
import Footer from '../../components/Footer/Footer.js';
import customerNavbarItems from '../../utils/Data/customerNavbaritems.js';

const Contact = () => {
    return (
        <>
            <Navigation items={customerNavbarItems} />
            <Container className='contactContainer'>
                <Row className='contactRow'>
                    <Col sm={8} ><Card.Img variant='top' src={'image/' + 'peach3.jpg'} /></Col>
                    <Col sm={4}>
                        <h2>CONTACT US</h2>
                        <p>Any questions?</p>
                        <p><strong>Phone:</strong> 02 1234 0000</p>
                        <p><strong>Email:</strong> admin@purefruit.com</p>
                        <p><strong>Address:</strong> 100 Pure St, Fruit, NSW 0000</p>
                        <br />
                        <h2>FAQ</h2>
                        <p><strong>Q: How will I receive my products?</strong></p>
                        <p>A: All products are pick up only at the company address.</p>
                        <br />
                        <p><strong>Q: How do I pay for my products?</strong></p>
                        <p>A: You can pay on the day of collection. We accept cash and credit card payments.</p>
                        <br />
                        <p><strong>Q: How will I get a notification?</strong></p>
                        <p>A: Notifications are sent via Email usually one week before the product arrives.</p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default Contact;