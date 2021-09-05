import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import excursionDetailsReducer from '../reducers/excursionDetailsReducer';
import excursionsListReducer from '../reducers/excursionsListReducer';

const reducer = combineReducers({
  excursionsList: excursionsListReducer,
  excursionDetails: excursionDetailsReducer
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
