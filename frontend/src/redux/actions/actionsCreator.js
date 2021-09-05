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

const listExcursionDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.EXCURSION_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/excursions/${id}`);

    dispatch({
      type: actionTypes.EXCURSION_DETAILS_SUCCESS,
      payload: data
    });
  } catch (error) {
    dispatch({
      type: actionTypes.EXCURSION_DETAILS_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message : error.message
    });
  }
};

export default { listExcursions, listExcursionDetails };
