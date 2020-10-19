import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import './About.css';

const About = () => {
    return (
        <>
            <Container>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pharetra vehicula ante eget volutpat. Praesent eu erat eu massa feugiat hendrerit eu suscipit dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur blandit quam in justo iaculis gravida. Aenean placerat, ex at venenatis molestie, orci ipsum imperdiet massa, ac molestie eros enim non arcu. Sed dictum urna non mollis tincidunt.

                            In ut lectus enim. Maecenas efficitur erat ut suscipit viverra. Proin mauris lorem, venenatis id dui et, suscipit imperdiet sapien. Pellentesque tortor risus, iaculis efficitur vulputate non, mattis dapibus justo. Etiam commodo mauris convallis ultrices gravida. Aenean eleifend nisl ut neque lobortis ultrices. In turpis nunc, gravida id leo a, dapibus convallis ante.

                            Nulla eleifend mauris gravida bibendum scelerisque. Ut in blandit nisl. Sed ac placerat urna. Aliquam erat volutpat. Nam volutpat lorem et mauris sagittis molestie. In tempus metus arcu, non congue dui venenatis sit amet. Pellentesque in hendrerit quam. Sed ultrices turpis at viverra semper. Vestibulum in vestibulum odio. Nam feugiat gravida lacus dictum consectetur. Etiam eu aliquet lectus.
                        </p>
                        <br/>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default About;