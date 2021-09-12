import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import excursionDetailsReducer from '../reducers/excursionDetailsReducer';
import excursionsListReducer from '../reducers/excursionsListReducer';
import cartReducer from '../reducers/cartReducer';
import userReducers from '../reducers/userReducers';
import orderReducers from '../reducers/orderReducers';

const reducer = combineReducers({
  excursionsList: excursionsListReducer,
  excursionDetails: excursionDetailsReducer,
  cart: cartReducer,
  userLogin: userReducers.userLoginReducer,
  userRegister: userReducers.userRegisterReducer,
  userDetails: userReducers.userDetailsReducer,
  userUpdateProfile: userReducers.userUpdateProfileReducer,
  orderCreate: orderReducers.orderCreateReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [];

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const clientAddressFromStorage = localStorage.getItem('clientAddress') ? JSON.parse(localStorage.getItem('clientAddress')) : {};

const initialState = {
  cart: { cartItems: cartItemsFromStorage, clientAddress: clientAddressFromStorage },
  userLogin: { userInfo: userInfoFromStorage }
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
