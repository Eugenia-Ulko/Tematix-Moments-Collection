/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Row, Col, Image, ListGroup, Card, Button
} from 'react-bootstrap';
import axios from 'axios';
import Rating from '../components/Rating/rating';

const ExcursionScreen = ({ match }) => {
  const [excursion, setExcursion] = useState({});

  useEffect(() => {
    const fetchExcursion = async () => {
      const { data } = await axios.get(`/api/excursions/${match.params.id}`);

      setExcursion(data);
    };
    fetchExcursion();
  }, []);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">Go Back</Link>

      <Row>
        <Col md={6}>
          <Image src={excursion.image} alt={excursion.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{excursion.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={excursion.rating} text={`${excursion.numReviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price per person:
              {' '}
              {excursion.price}
              {' '}
              €
            </ListGroup.Item>
            <ListGroup.Item>
              {' '}
              {excursion.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price per person:
                  </Col>
                  <Col>
                    <strong>
                      {excursion.price}
                      {' '}
                      €
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item disabled={excursion.placesAvailable > 0}>
                <Row>
                  Sorry, no available places for this day
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="btn-block" type="button" disabled={excursion.placesAvailable === 0}>
                  Book now
                </Button>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>

    </>
  );
};
export default ExcursionScreen;
