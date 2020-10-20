import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Modal.css';

function MyVerticallyCenteredModal(props) {

    console.log(props.value.title);
    
    // modal elements
    const title = props.value.title;
    // const text = props.value.text;
    const price = props.value.price;
    const image = props.value.image;
    const description = props.value.description;

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
          <h3>{price}</h3>
          <p>
            {description}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

export default MyVerticallyCenteredModal;