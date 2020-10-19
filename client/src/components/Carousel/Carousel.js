import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Button from '@bit/mui-org.material-ui.button';
import './Carousel.css';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
        <Container>
      <Carousel activeIndex={index} onSelect={handleSelect} >
      
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'image/peach2.jpg'}
            alt="First slide"
          />
          <Carousel.Caption>
           <h3>Okayama White Peach</h3>
            <Button variant="contained" color="primary">
            Pre-order
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={'image/strawberry1.jpg'}
            alt="Second slide"
          />
          <Carousel.Caption>
           <h3>Pearl White Strawberry</h3>
            <Button variant="contained" color="primary">
            Pre-order
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </Container>
    );
  }

export default ControlledCarousel;