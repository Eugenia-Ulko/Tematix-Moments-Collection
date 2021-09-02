import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import Excursion from '../components/Excursions/excursion';

const HomeScreen = () => {
  const [excursions, setExcursions] = useState([]);

  useEffect(() => {
    const fetchExcursions = async () => {
      const { data } = await axios.get('/api/excursions');

      setExcursions(data);
    };
    fetchExcursions();
  }, []);

  return (
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
};
export default HomeScreen;
