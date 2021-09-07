import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import excursionDetailsReducer from '../reducers/excursionDetailsReducer';
import excursionsListReducer from '../reducers/excursionsListReducer';
import cartReducer from '../reducers/cartReducer';

const reducer = combineReducers({
  excursionsList: excursionsListReducer,
  excursionDetails: excursionDetailsReducer,
  cart: cartReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const initialState = {
  cart: { cartItems: cartItemsFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
