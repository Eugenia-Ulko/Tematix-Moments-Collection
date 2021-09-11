/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import {
  Button, Row, Col, ListGroup, Image, Card
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Message from '../components/Messages/Message';
import Checkout from '../components/Checkout/checkout';

const PlaceOrderScreen = () => {
  const cart = useSelector((state) => state.cart);

  // calculate prices
  cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  cart.taxPrice = Number((0.21 * cart.itemsPrice).toFixed(2));

  cart.totalPrice = cart.itemsPrice + cart.taxPrice;

  const placeOrderHandler = () => {
    console.log('order');
  };

  return (
    <>
      <Checkout step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Order Confirmation</h2>
              <p>
                <strong>Address:</strong>
                {cart.clientAddress.address}
                ,
                {cart.clientAddress.city}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Payment Method</h2>
              <strong>Payment Method:</strong>
              {cart.paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h2>Order Items</h2>

              {cart.cartItems.length === 0 ? <Message>Your cart is empty</Message> : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
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
                <h2>Order Summary</h2>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>
                    {cart.itemsPrice}
                    €
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>
                    {cart.taxPrice}
                    €
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>
                    {cart.totalPrice}
                    €
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Confirm order

                </Button>
              </ListGroup.Item>

            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default PlaceOrderScreen;
