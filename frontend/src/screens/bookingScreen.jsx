/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row, Col, ListGroup, Image, Card
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Message from '../components/Messages/Message';
import Loader from '../components/Messages/Loader';
import { getOrderDetails } from '../redux/actions/orderActions';

const BookingScreen = ({ match }) => {
  const bookingId = match.params.id;
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderCreate);
  const { booking, loading, error } = orderDetails;

  if (!loading) {
    // calculate prices
    booking.itemsPrice = booking.bookingItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  }

  useEffect(() => {
    if (!booking || booking._id !== bookingId) {
      dispatch(getOrderDetails(bookingId));
    }
  }, [booking, bookingId]);

  return loading ? <Loader /> : error ? <Message variant="danger">{error}</Message> : (
    <>
      <h1>
        Booking
        {booking._id}
      </h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Booking Confirmation</h2>
              <p>
                {' '}
                <strong>Customer Name:</strong>
                {' '}
                {booking.user.name}

              </p>
              <p>
                {' '}
                <strong>Email:</strong>
                <a href={`mailto:${booking.user.email}`}>{booking.user.email}</a>

              </p>

              <p>
                <strong>Address:</strong>
                {booking.clientAddress.address}
                ,
                {booking.clientAddress.city}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Payment Method:</strong>
                {booking.paymentMethod}
                {' '}

              </p>
              {booking.isPaid ? (
                <Message variant="success">
                  Paid on
                  {' '}
                  {booking.paidAt}
                </Message>
              )
                : <Message variant="danger">Not Paid</Message>}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Booked Tours</h2>

              {booking.bookingItems.length === 0 ? <Message>Booking is empty</Message> : (
                <ListGroup variant="flush">
                  {booking.bookingItems.map((item, index) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid rounded />
                        </Col>
                        <Col>
                          <Link to={`/excursion/${item.excursion}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty}
                          {' '}
                          x
                          {' '}
                          {item.price}
                          € =
                          {' '}
                          {item.qty * item.price}
                          €
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              ) }
            </ListGroup.Item>

          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Booking Summary</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>
                    {booking.itemsPrice}
                    €
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>
                    {booking.taxPrice}
                    €
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>
                    {booking.totalPrice}
                    €
                  </Col>
                </Row>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default BookingScreen;
