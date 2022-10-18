import React from 'react';
import { Button } from 'react-bootstrap';
import './CartItem.css';

const CartItem = ({device}) => {
    
  return (
        <div className='item-card'>
            <img src={process.env.REACT_APP_API_URL + device.img} alt={device.name}/>
            <div className='item-card__name'>{device.name}</div>
            <div className='item-card__quantity'>
                <Button className='me-2' variant="secondary" size="sm">+</Button>
                <div>{device.quantity}1</div>
                <Button className='ms-2' variant="secondary" size="sm">-</Button>
            </div>
            <div className='item-cart__price'>
                ${device.price}
            </div>
            <div className='item-cart__delete'>
              <Button variant="secondary" size="sm">x</Button>
            </div>
        </div>
        );
};

export default CartItem;