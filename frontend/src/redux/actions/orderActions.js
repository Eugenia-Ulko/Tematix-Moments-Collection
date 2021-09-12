import axios from 'axios';
import actionTypes from './actionTypes';

const createOrder = (booking) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ORDER_CREATE_REQUEST
    });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    };
    const { data } = await axios.post('/api/bookings', booking, config);

    dispatch({
      type: actionTypes.ORDER_CREATE_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ORDER_CREATE_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message
    });
  }
};

const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ORDER_DETAILS_REQUEST
    });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    };
    const { data } = await axios.get(`/api/bookings/${id}`, config);

    dispatch({
      type: actionTypes.ORDER_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ORDER_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message
    });
  }
};

const payOrder = (bookingId, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({
      type: actionTypes.ORDER_PAY_REQUEST
    });

    const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`
      }
    };
    const { data } = await axios.put(`/api/bookings/${bookingId}/pay`, paymentResult, config);

    dispatch({
      type: actionTypes.ORDER_PAY_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ORDER_PAY_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message
    });
  }
};

export {
  createOrder,
  getOrderDetails,
  payOrder
};
