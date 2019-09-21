import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CHANGE_PROFILE_SUCCESS,
  CHANGE_PROFILE_ERROR,
  USER_LOAD_SUCCESS,
  USER_LOAD_ERROR,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_ERROR
} from './types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOAD_SUCCESS:
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
    case CHANGE_PROFILE_SUCCESS:
      return {
        ...state,
        user: payload,
        isAuthenticated: true,
        loading: false
      };
    case USER_LOAD_ERROR:
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case CHANGE_PROFILE_ERROR:
    case USER_LOGOUT_ERROR:
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
        isAuthenticated: true,
        loading: false
      };
    default:
      return state;
  }
};
