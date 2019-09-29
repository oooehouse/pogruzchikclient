import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  CHANGE_PROFILE,
  CHANGE_PROFILE_SUCCESS,
  CHANGE_PROFILE_ERROR,
  USER_LOAD,
  USER_LOAD_SUCCESS,
  USER_LOAD_ERROR,
  USER_LOGOUT_SUCCESS,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR
} from './types';

export const register = data => ({
  type: REGISTER,
  payload: data
});
export const registerSuccess = data => ({
  type: REGISTER_SUCCESS,
  payload: data
});
export const registerError = () => ({
  type: REGISTER_ERROR
});

export const login = data => ({
  type: LOGIN,
  payload: data
});
export const loginSuccess = data => ({
  type: LOGIN_SUCCESS,
  payload: data
});
export const loginError = () => ({
  type: LOGIN_ERROR
});

export const changeProfile = data => ({
  type: CHANGE_PROFILE,
  payload: data
});
export const changeProfileSuccess = data => ({
  type: CHANGE_PROFILE_SUCCESS,
  payload: data
});
export const changeProfileError = () => ({
  type: CHANGE_PROFILE_ERROR
});

export const loadUser = data => ({
  type: USER_LOAD,
  payload: data
});
export const loadUserSuccess = data => ({
  type: USER_LOAD_SUCCESS,
  payload: data
});
export const loadUserError = () => ({
  type: USER_LOAD_ERROR
});

export const logOut = data => ({
  type: USER_LOGOUT_SUCCESS,
  payload: data
});

export const deleteUser = data => ({
  type: DELETE_USER,
  payload: data
});
export const deleteUserSuccess = data => ({
  type: DELETE_USER_SUCCESS,
  payload: data
});
export const deleteUserError = () => ({
  type: DELETE_USER_ERROR
});
