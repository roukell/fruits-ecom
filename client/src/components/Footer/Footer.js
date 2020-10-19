import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () =>  (
    <>
        <Container fluid className='footerContainer'>
          <div className='footerDiv'>
           <p>© 2020 Pure Fruit. All Rights Reserved.</p>
          </div>
        </Container>
    </>

  );

export default Footer;
