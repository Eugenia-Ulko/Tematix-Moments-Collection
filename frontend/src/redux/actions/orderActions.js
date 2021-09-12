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
    const { data } = await axios.post('/api/orders', booking, config);

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

export default
createOrder;
