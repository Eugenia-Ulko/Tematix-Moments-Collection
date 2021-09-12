import actionTypes from '../actions/actionTypes';

const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ORDER_CREATE_REQUEST:
      return {
        loading: true
      };
    case actionTypes.ORDER_CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        booking: action.payload
      };
    case actionTypes.ORDER_CREATE_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

export default {
  orderCreateReducer
};
