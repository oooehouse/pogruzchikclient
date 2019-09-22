import { takeEvery, put, call } from 'redux-saga/effects';
import { callApi } from '../../api/api';
import {
  REGISTER,
  LOGIN,
  CHANGE_PROFILE,
  USER_LOAD,
  USER_LOGOUT,
  DELETE_USER
} from './types';

import {
  registerSuccess,
  registerError,
  loginSuccess,
  loginError,
  changeProfileSuccess,
  changeProfileError,
  loadUserSuccess,
  loadUserError,
  deleteUserSuccess,
  deleteUserError
} from './action';

// Register user
function* register(data) {
  try {
    const userData = yield call(callRegister, data);
    yield put(registerSuccess(userData.data));
  } catch (err) {
    yield put(registerError());
  }
}
const callRegister = data => callApi().post('api/user/register');

// Log in user
function* login(data) {
  try {
    const userData = yield call(callLogin, data);
    yield put(loginSuccess(userData.data));
  } catch (err) {
    yield put(loginError());
  }
}
const callLogin = data => callApi().post('api/user/login');

// Change profile user
function* changeProfile(data) {
  try {
    const userData = yield call(callChangeProfile, data);
    yield put(changeProfileSuccess(userData.data));
  } catch (err) {
    yield put(changeProfileError());
  }
}
const callChangeProfile = data => callApi().put('api/user');

// Load user
function* loadUser(data) {
  try {
    const userData = yield call(callLoadUser, data);
    yield put(loadUserSuccess(userData.data));
  } catch (err) {
    yield put(loadUserError());
  }
}
const callLoadUser = data => callApi().get('api/user');

// delete user
function* deleteUser(data) {
  try {
    const userData = yield call(callDeleteUser, data);
    yield put(deleteUserSuccess(userData.data));
  } catch (err) {
    yield put(deleteUserError());
  }
}
const callDeleteUser = data => callApi().get('api/user');

const userSaga = [
  takeEvery(REGISTER, register),
  takeEvery(LOGIN, login),
  takeEvery(CHANGE_PROFILE, changeProfile),
  takeEvery(USER_LOAD, loadUser),
  takeEvery(DELETE_USER, deleteUser)
];

export default userSaga;
