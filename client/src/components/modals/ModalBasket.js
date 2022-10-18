import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { BASKET_ROUTE } from '../../utils/consts';


  const ModalBasket = (props) => {
    const navigate = useNavigate();

    const checkout = () => {
      navigate(BASKET_ROUTE);
      props.onHide();
    };
    

  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Cart
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>Oh...seems like the cart is empty...</p>
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={() => checkout()}>Сheckout</Button>
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
  </Modal>
    );
  };

export default ModalBasket;