/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row, Col, Form, Button, Table
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Message from '../components/Messages/Message';
import Loader from '../components/Messages/Loader';
import { getUserDetails, updateUserProfile } from '../redux/actions/userActions';
import { myListOrders } from '../redux/actions/orderActions';

// eslint-disable-next-line no-unused-vars
const ProfileScreen = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  const orderMyList = useSelector((state) => state.orderMyList);
  const { loading: loadingBookings, error: errorBookings, bookings } = orderMyList;
  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      // eslint-disable-next-line no-lonely-if
      if (!user.name) {
        dispatch(getUserDetails('profile'));
        dispatch(myListOrders());
      } else {
        setName(user.name);
        setEmail(user.email);
      }
    }
  }, [dispatch, history, userInfo, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
    } else {
      dispatch(updateUserProfile({
        id: user._id, name, email, password
      }));
    }
  };
  return (
    <Row>
      <Col md={3}>
        <h2>Profile</h2>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        {success && <Message variant="success">Profile Updated</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>
              Name
            </Form.Label>
            <Form.Control type="name" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="email">
            <Form.Label>
              Email Address
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="password">
            <Form.Label>
              Password
            </Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="confirmPassword">
            <Form.Label>
              Confirm Password
            </Form.Label>
            <Form.Control type="password" placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </Form.Group>

          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form>
      </Col>

      <Col md={9}>
        <h2>My Bookings</h2>
        {loadingBookings ? <Loader /> : errorBookings ? <Message variant="danger">{errorBookings}</Message> : (
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>COMPLETED</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id}>

                  <td>{booking._id}</td>
                  <td>{booking.createdAt.substring(0, 10)}</td>
                  <td>{booking.totalPrice}</td>
                  <td>
                    {booking.isPaid ? booking.paidAt.substring(0, 10) : (
                      <i className="fas fa-times" style={{ color: 'red' }} />)}

                  </td>
                  <td>
                    <LinkContainer to={`/booking/${booking._id}`}>
                      <Button className="btn-sm" variant="light">Details</Button>
                    </LinkContainer>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Col>

    </Row>
  );
};

export default ProfileScreen;
