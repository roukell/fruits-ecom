import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css';

const card = ({ items }) => {
    const cardItems = items.map(({ title, text, price, image }) => {
        return (
        <Card style={{ width: '18rem' }} key={ title }>
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
    )})

    return (
        <>
            <ul>
                <li>
                    {cardItems}
                </li>
            </ul>
        </>
    )
};

export default card;