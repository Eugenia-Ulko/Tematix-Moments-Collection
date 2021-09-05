import actionTypes from '../actions/actionTypes';

export default function excursionDetailsReducer(state = { excursion: { reviews: [] } }, action) {
  switch (action.type) {
    case actionTypes.EXCURSION_DETAILS_REQUEST:
      return { loading: true, ...state };
    case actionTypes.EXCURSION_DETAILS_SUCCESS:
      return { loading: false, excursion: action.payload };
    case actionTypes.EXCURSION_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
