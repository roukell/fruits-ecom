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
                        <p>
                           Our company aim to provide premium quality fruits at its freshest.
                           <br/>
                           Most of the time our customers will have to pre-order items, however,
                           occassionally we offer fruits that are already in stock.  
                       </p>
                        <br/>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ut euismod orci, sed ultricies nunc. Maecenas ut metus ante. Aliquam posuere rutrum dictum. Nunc porttitor enim quis augue laoreet suscipit. Aenean tempus, eros quis facilisis porta, arcu sem tempus neque, convallis scelerisque urna erat vitae augue. Integer viverra justo fringilla, tempor augue non, tempor massa. Pellentesque eget purus magna. Mauris pharetra tristique tristique. Donec a erat vestibulum leo maximus sagittis. Nulla sed gravida nisi. Integer et orci et ipsum vestibulum eleifend a at felis. Cras vel iaculis sapien. Vestibulum non dignissim erat. Cras efficitur felis nec enim egestas consequat. Aliquam convallis scelerisque pharetra. Nulla cursus mollis urna. Vivamus augue lacus, euismod at libero pharetra, suscipit semper magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam condimentum velit eu purus efficitur tempor. Sed quis sapien a odio porttitor porttitor. Sed tristique dapibus metus id dignissim.
                        </p>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}

export default About;