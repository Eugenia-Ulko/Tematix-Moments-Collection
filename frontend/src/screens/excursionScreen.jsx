/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row, Col, Image, ListGroup, Card, Button, Form
} from 'react-bootstrap';
import Rating from '../components/Rating/rating';
import Message from '../components/Messages/Message';
import Loader from '../components/Messages/Loader';
import { listExcursionDetails } from '../redux/actions/actionsCreator';

const ExcursionScreen = ({ history, match }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const excursionDetails = useSelector((state) => state.excursionDetails);
  const { loading, error, excursion } = excursionDetails;

  useEffect(() => {
    dispatch(listExcursionDetails(match.params.id));
  }, [dispatch, match]);

  const bookHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">Go Back</Link>
      {loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
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

                {/* <ListGroup.Item disabled={excursion.placesAvailable > 0}>
                  <Row>
                    Sorry, no available places for this day
                  </Row>
      </ListGroup.Item> */}

                {excursion.placesAvailable > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty. pax</Col>
                    <Col>
                      <Form.Control as="select" value={qty} onChange={(e) => setQty(e.target.value)}>
                        {[...Array(excursion.placesAvailable).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>

                )}

                <ListGroup.Item>
                  <Button onClick={bookHandler} className="btn-block" type="button" disabled={excursion.placesAvailable === 0}>
                    Book now
                  </Button>
                </ListGroup.Item>

              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}

    </>
  );
};
export default ExcursionScreen;
