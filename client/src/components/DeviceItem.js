import React from 'react';
import { Button, Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/consts';
import './DeviceItem.css';

const DeviceItem = ({device}) => {

    const navigate = useNavigate();

    return (
        <Col md={3} className="device-col" onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
            <Card className='device-card'>
                <Image className='device-image' src={process.env.REACT_APP_API_URL + device.img} />
                <div className='device-item-name'>
                    <div>{device.brand}</div>
                    <div className='device-rating' >
                        <div>{device.rating}</div>
                        <Image className='item-img-rating' src={star}/>
                    </div>                    
                </div>
                <div className='device-name__shop'>{device.name}</div>
                <div className='cart-price'>
                    <Button
                    >+</Button>
                    <div>{device.price} USD</div>
                </div>
            </Card>
        </Col>
    );
};

export default DeviceItem;