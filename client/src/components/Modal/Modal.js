import React, { useContext, useState } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import TextField from '../TextField/TextField.js';
import OrderContext from '../../utils/Contexts/OrderContext.js';

function MyVerticallyCenteredModal(props) {
  // modal elements
  const title = props.value.title;
  // const text = props.value.text;
  const price = props.value.price;
  const unit = props.value.unit;
  const image = props.value.image;
  const description = props.value.description;

  // callback handler for receiving qauntity from TextField
  const [quantity, setQuantity] = useState('0');
  // function to setQuantity
  const countQuantity = event => {
    setQuantity(event.target.value);
  }

  // useContext for onClick event
  const updateOrder = useContext(OrderContext);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          className='d-block w-100'
          src={'image/' + image}
          alt={title}></img>
        <h3>$ {price} {'  ('}{unit}{')'}</h3>
        <Container>
          <Row>
            <Col sm={8}>
              <TextField onChange={countQuantity} />
            </Col>
            <Col sm={4}>
              {/* need to change here to add up, total price =  item price x quantity */}
              <Button
                size='lg'
                variant='primary'
                block
                onClick={() => updateOrder.onClick(title, quantity, price)} >
                Add to cart
          </Button>
            </Col>
          </Row>
        </Container>
        <p>
          {description}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='light'
          onClick={props.onHide}
        >
          Close
          </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;