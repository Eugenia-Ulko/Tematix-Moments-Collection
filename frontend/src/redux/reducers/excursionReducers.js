 const excursionsReducer = (state = { excursions: [] }, action) => {
  switch (action.type) {
    case 'EXCURSION_LIST_REQUEST':
      return { loading: true };
    case 'EXCURSION_LIST_SUCCESS':
      return { loading: false, excursions: action.payload };
    case 'EXCURSION_LIST_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

default export excursionsReducer;