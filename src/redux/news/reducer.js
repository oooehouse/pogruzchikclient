const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'NEWS_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };

    default:
      return state;
  }
}
