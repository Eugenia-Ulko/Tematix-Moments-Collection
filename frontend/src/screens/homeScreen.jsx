import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Excursion from '../components/Excursions/excursion';
import excursions from '../excursions';

const HomeScreen = () => (
  <>

    <h1>Highlight tours</h1>
    <Row>
      {excursions.map((excursion) => (
        <Col key={excursion.id} sm={12} md={6} lg={3} xl={3}>
          <Excursion excursion={excursion} />
        </Col>
      ))}

    </Row>
  </>
);

export default HomeScreen;
