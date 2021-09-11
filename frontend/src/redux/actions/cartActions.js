/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/excursions/${id}`);
  dispatch({
    type: actionTypes.CART_ADD_ITEM,
    payload: {
      excursion: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      placesAvailable: data.placesAvailable,
      qty
    }
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.CART_REMOVE_ITEM,
    payload: id
  });

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveClientAddress = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.CART_SAVE_CLIENT_ADDRESS,
    payload: data
  });

  localStorage.setItem('clientAddress', JSON.stringify(data));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({
    type: actionTypes.CART_SAVE_PAYMENT_METHOD,
    payload: data
  });

  localStorage.setItem('paymentMethod', JSON.stringify(data));
};
