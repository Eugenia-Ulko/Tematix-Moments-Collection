import actionTypes from '../actions/actionTypes';

export default function excursionsListReducer(state = { excursions: [] }, action) {
  switch (action.type) {
    case actionTypes.EXCURSION_LIST_REQUEST:
      return { loading: true, excursions: [] };
    case actionTypes.EXCURSION_LIST_SUCCESS:
      return { loading: false, excursions: action.payload };
    case actionTypes.EXCURSION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
