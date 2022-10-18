import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Card, Row } from 'react-bootstrap';
import './BrandBar.css';

const BrandBar = observer(() => {
    const {device} = useContext(Context);


return (
  <Row className='brand-row'>
      {device.brands.map(brand =>
          <Card
              className='brand-row__card'
              key={brand.id}
              onClick={() => device.setSelectedBrand(brand)}
              border={brand.id === device.selectedBrand.id ? 'success' : 'light'}
              >
              {brand.name}
          </Card>
      )}
  </Row>
);
});

export default BrandBar;

