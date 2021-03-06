/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes';

export default function cartReducer(state = { cartItems: [], clientAddress: {} }, action) {
  switch (action.type) {
    case actionTypes.CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find((x) => x.excursion === item.excursion);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) => (x.excursion === existItem.excursion ? item : x))
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, item]
      };

    case actionTypes.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.excursion !== action.payload)
      };

    case actionTypes.CART_SAVE_CLIENT_ADDRESS:
      return {
        ...state,
        clientAddress: action.payload
      };
    case actionTypes.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload
      };
    default:
      return state;
  }
}
