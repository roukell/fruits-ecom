import React, { useState } from 'react';
import { Card, CardDeck, Button, Row, Container } from 'react-bootstrap';
import './Card.css';
import MyVerticallyCenteredModal from '../Modal/Modal.js';

const Cards = ({ items }) => {
    const [modalShow, setModalShow] = useState(false);

    const cardItems = items.map(({ title, text, price, image }) => {
        return (
            <Card style={{ width: '20rem' }} key={title}>
                <Card.Img variant="top" src={'image/' + image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {text}
                        <hr />
                        {price}
                    </Card.Text>
                    <Button
                        variant="outline-danger"
                        size="lg"
                        block
                        onClick={() => setModalShow(true)}
                    >
                        Add to cart
                        </Button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </Card.Body>
            </Card>
        )
    })

    return (
        <>
            <Container>
                <CardDeck className="justify-content-md-center">
                    <Row xs={1} md={2} >
                        {cardItems}
                    </Row>
                </CardDeck>
            </Container>
        </>
    )
};

export default Cards;