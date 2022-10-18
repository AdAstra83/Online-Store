import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceApi';
import './DevicePage.css';


const DevicePage = () => {
  const [device, setDevice] = useState( {info:[]})
  const {id} = useParams()

  useEffect (() => {
    fetchOneDevice(id).then(data => setDevice(data))
  }, [id])

  return (
    <Container className='device-page'>
    <Row>
    <Col md={7}>
        <Image className='device-page__img' src={process.env.REACT_APP_API_URL + device.img}  alt={device.name} />
    </Col>
    <Col md={4}>
      <Col className='device-page__name'>
        <h2>{device.name}</h2>
        <div className='rating-image'>
          {device.rating}
        </div>
      </Col>
        <Card className='device-page__cart'>
          <h3>{device.price} $</h3>
          <Button variant={"outline-dark"} 
          >Add to cart</Button>
        </Card>
    </Col>
    </Row>
    <Row className='device-page__specs' >
      <h1>Specifications</h1>
      {device.info.map((info, index) =>
        <Row className='device-page__list-specs' key={info.id} 
        style={{background: index %2 === 0 ? 'lightgray' : 'transparent'}} >
          {info.title}: {info.description}
        </Row>
        )}
    </Row>
    </Container>
  );
};

export default DevicePage;