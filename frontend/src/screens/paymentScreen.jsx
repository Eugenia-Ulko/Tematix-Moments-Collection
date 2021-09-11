/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Form, Button, Col
} from 'react-bootstrap';
import FormContainer from '../components/Form/formContainer';
import Checkout from '../components/Checkout/checkout';
import { savePaymentMethod } from '../redux/actions/cartActions';

const PaymentScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { clientAddress } = cart;

  if (!clientAddress) {
    history.push('/confirmation');
  }

  const [paymentMethod, setPaymentMethod] = useState('Paypal');

  const dispatch = useDispatch(

  );
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };

  return (
    <FormContainer>
      <Checkout step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>

          <Col>
            <Form.Check
              type="radio"
              label="PayPal or Credit Card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
            <Form.Check
              type="radio"
              label="Webmoney"
              id="Webmoney"
              name="paymentMethod"
              value="Webmoney"
              onChange={(e) => setPaymentMethod(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Button type="submit" variant="primary">Continue</Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentScreen;
