import React from 'react';
import { Card, CardDeck, Button, Row, Container } from 'react-bootstrap';
import './Card.css';

const card = ({ items }) => {
    const cardItems = items.map(({ title, text, price, image }) => {
        return (
         
                <Card style={{ width: '18rem' }} key={title}>
                    <Card.Img variant="top" src={'image/' + image} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                            {text}
                        </Card.Text>
                        <Button variant="primary">{price}</Button>
                        <Button>Add to cart</Button>
                    </Card.Body>
                </Card>
         
        )
    })

    return (
        <>
        <Container>
             <h3>
            BEST SELLERS
             </h3>
            <CardDeck className="justify-content-md-center">
                <Row xs={1} md={2} >
                            {cardItems} 
                </Row>
            </CardDeck>
        </Container>
       
        </>
    )
};

export default card;