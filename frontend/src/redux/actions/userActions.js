import axios from 'axios';
import actionTypes from './actionTypes';

const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.USER_LOGIN_REQUEST
    });

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { data } = await axios.post('/api/users/login', { email, password }, config);

    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LOGIN_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message
    });
  }
};

export default login;