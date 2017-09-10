const initialState = {
  fetching: false,
  fetched: false,
  data: {},
  error: null
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GITHUB_DATA_START':
      return {...state, fetching: true, fetched: false};
    case 'GITHUB_DATA_ERROR':
    return {...state, fetching: false, fetched: false, error: action.payload};
    case 'GITHUB_DATA_RECEIVED':
      return {
        ...state,
        fetching:false,
        fetched: true,
        data: action.payload
      };

    default:
      state;
  }
  return state;
}
