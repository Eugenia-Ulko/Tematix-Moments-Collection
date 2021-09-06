/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Rating from '../Rating/rating';

const Excursion = ({ excursion }) => (
  <footer>
    <Card className="my=3 p-3 rounded">
      <Link to={`/excursion/${excursion._id}`}>
        <Card.Img src={excursion.image} variant="top" />
      </Link>

      <Card.Body>
        <Link to={`/excursion/${excursion._id}`}>
          <Card.Title as="div">
            <strong>{excursion.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={excursion.rating}
            text={`${excursion.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">
          {excursion.price}
          €
        </Card.Text>
      </Card.Body>
    </Card>
  </footer>
);

export default Excursion;
