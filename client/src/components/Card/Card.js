import React, { useState } from 'react';
import { Card, CardDeck, Button, Row, Container } from 'react-bootstrap';
import './Card.css';
import MyVerticallyCenteredModal from '../Modal/Modal.js';

const Cards = ({ items }) => {
    // modal variable
    const [modalShow, setModalShow] = useState(false);
    const [modalProduct, setModalProduct] = useState('null');

    // onClick function 1: setModalShow to true
    const handleModal = () => {
        setModalShow(true);
    }

    // onClick function 2: setModalProduct to current product
    const handleProductChange = event => {
        setModalProduct(event.item);
    }

    // when onClick, call both functions
    const clickFunctions = (event) => {
        handleModal();
        handleProductChange(event);
    }

    // render products items
    const cardItems = items.map((item) => {
        return (
            <Card style={{ width: '20rem' }} key={item.title}>
                <Card.Img variant="top" src={'image/' + item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>
                        {item.text}
                        {item.price}
                    </Card.Text>
                    <Button
                        variant='outline-danger'
                        size='lg'
                        block
                        value={item}
                        onClick={() => clickFunctions({item})}
                    >
                        VIEW DETAILS
                        </Button>
                    <MyVerticallyCenteredModal
                        value={modalProduct}
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
                <CardDeck className='justify-content-md-center'>
                    <Row xs={1} md={2} >
                        {cardItems}
                    </Row>
                </CardDeck>
            </Container>
        </>
    )
};

export default Cards;