/* eslint-disable react/prop-types */
import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Button
} from 'react-bootstrap';

import FormContainer from '../components/Form/formContainer';
import { saveClientAddress } from '../redux/actions/cartActions';

const OrderConfirmationScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { clientAddress } = cart;

  const [address, setAddress] = useState(clientAddress.address);
  const [city, setCity] = useState(clientAddress.city);

  const dispatch = useDispatch(

  );
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveClientAddress({ address, city }));
    history.push('/payment');
  };

  return (
    <FormContainer>
      <h1>Order Confirmation</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="phoneNumber">
          <Form.Label>
            Address
          </Form.Label>
          <Form.Control type="text" placeholder="Enter your phone number" value={address} onChange={(e) => setAddress(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>
            City
          </Form.Label>
          <Form.Control type="text" placeholder="Enter city" value={city} onChange={(e) => setCity(e.target.value)} />
        </Form.Group>

        <Button type="submit" variant="primary">Continue</Button>
      </Form>
    </FormContainer>
  );
};

export default OrderConfirmationScreen;
