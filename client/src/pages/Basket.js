import React from 'react';
import './Basket.css';

const Basket = () => {

    return (
      <div className='container'>
        <div className='cart-items'>
        <div className='cart-items__title'>Cart Items</div>
        <div className='cart-header'>
            <div className='cart-header__item'>ITEM</div>
            <div>QUANTITY</div>
            <div>PRICE</div>
          </div>
          Oh...seems like the cart is empty...
        <div className='cart-footer'>
          <div className='cart-footer__count'>-</div>
          <div className='cart-footer__price'>Summary: -
          </div>
        </div>
        </div>
      </div>
    )};

export default Basket;