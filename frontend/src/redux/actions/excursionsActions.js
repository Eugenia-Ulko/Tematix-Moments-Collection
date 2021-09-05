import axios from 'axios';
import actionTypes from './actionTypes';

const listExcursions = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.EXCURSION_LIST_REQUEST });

    const { data } = await axios.get('/api/excursions');

    dispatch({
      type: actionTypes.EXCURSION_LIST_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.EXCURSION_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message
    });
  }
};

export default listExcursions;
