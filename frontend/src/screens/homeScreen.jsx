/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Excursion from '../components/Excursions/excursion';
import Message from '../components/Messages/Message';
import Loader from '../components/Messages/Loader';
import { listExcursions } from '../redux/actions/actionsCreator';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const excursionsList = useSelector((state) => state.excursionsList);
  const { loading, error, excursions } = excursionsList;

  useEffect(() => {
    dispatch(listExcursions());
  }, [dispatch]);

  return (
    <>

      <h1>Highlight tours</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {excursions.map((excursion) => (
            <Col key={excursion._id} sm={12} md={6} lg={3} xl={3}>
              <Excursion excursion={excursion} />
            </Col>
          ))}

        </Row>
      )}
    </>
  );
};
export default HomeScreen;
