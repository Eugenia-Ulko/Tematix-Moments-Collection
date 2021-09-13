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

const orderDetailsReducer = (state = {
  loading: true,
  bookingItems: [],
  clientAddress: {}
}, action) => {
  switch (action.type) {
    case actionTypes.ORDER_DETAILS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case actionTypes.ORDER_DETAILS_SUCCESS:
      return {
        loading: false,
        booking: action.payload
      };
    case actionTypes.ORDER_DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};

const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ORDER_PAY_REQUEST:
      return {
        loading: true
      };
    case actionTypes.ORDER_PAY_SUCCESS:
      return {
        loading: false,
        success: true
      };
    case actionTypes.ORDER_PAY_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    case actionTypes.ORDER_PAY_RESET:
      return {};

    default:
      return state;
  }
};

const orderMyListReducer = (state = { bookings: [] }, action) => {
  switch (action.type) {
    case actionTypes.ORDER_MY_LIST_REQUEST:
      return {
        loading: true
      };
    case actionTypes.ORDER_MY_LIST_SUCCESS:
      return {
        loading: false,
        bookings: action.payload
      };
    case actionTypes.ORDER_MY_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      };
    case actionTypes.ORDER_MY_LIST_RESET:
      return { bookings: [] };
    default:
      return state;
  }
};

export default {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderMyListReducer
};
