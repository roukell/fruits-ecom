import React, { useContext, useState } from 'react';
import {
    Modal, Button, Container, Row, Col
} from 'react-bootstrap';
import TextField from '../TextField/TextField';
import OrderContext from '../../utils/Contexts/OrderContext';
import OrderModalContext from '../../utils/Contexts/OrderModalContext';
import WarningModal from './WarningModal';
import './Modal.css';

function MyVerticallyCenteredModal(props) {
    const orderModalState = useContext(OrderModalContext);
    // modal elements
    const { title } = props.value;
    // const text = props.value.text;
    const { price } = props.value;
    const { unit } = props.value;
    const { image } = props.value;
    const { description } = props.value;

    // callback handler for receiving qauntity from TextField
    const [quantity, setQuantity] = useState('0');
    // function to setQuantity
    const countQuantity = event => {
        setQuantity(event.target.value);
    };

    // useContext for onClick event
    const updateOrder = useContext(OrderContext);

    return (
        <Modal
            {...props}
            dialogClassName="modal-90w"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter" className='modalTitle'>
                    {title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col lg={6}>
                            <img
                                className='d-block w-100'
                                src={`image/${image}`}
                                alt={title}></img>
                        </Col>
                        <Col lg={6}>
                            <p className='modalDescription'>
                                {description}
                            </p>
                            <p className='modalPrice'>
                            $ {price} {'  ('}{unit}{')'}
                            </p>
                            <Row>
                                <Col sm={6}>
                                    <TextField
                                        onChange={countQuantity}
                                    />
                                </Col>
                                <Col sm={6}>
                                    <Button
                                        size='lg'
                                        variant='light'
                                        block
                                        onClick={
                                            () => updateOrder.onClick(title, quantity, price)} >
                                    Add to cart
                                    </Button>
                                    <WarningModal
                                        open={orderModalState.open}
                                        onClose={orderModalState.handleClose}
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default MyVerticallyCenteredModal;
