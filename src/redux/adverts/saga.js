import { takeEvery, put, call } from 'redux-saga/effects';
import { callApi } from '../../api/api';
import { CREATE_ADVERT, DELETE_ADVERT, LOAD_ADVERTS } from './types';

import {
  createAdvertSuccess,
  createAdvertError,
  deleteAdvertSuccess,
  deleteAdvertError,
  loadAdvertsSuccess,
  loadAdvertsError
} from './action';

// Create advert
function* createAdvert(data) {
  try {
    const userData = yield call(callCreateAdvert, data.payload);
    yield put(createAdvertSuccess(userData.data));
  } catch (err) {
    yield put(createAdvertError());
  }
}
const callCreateAdvert = inf => callApi().post('api/vehicle-adv', inf);

// Delete advert
function* deleteAdvert(data) {
  try {
    const userData = yield call(callDeleteAdvert, data.payload);
    yield put(deleteAdvertSuccess(userData.data));
  } catch (err) {
    yield put(deleteAdvertError());
  }
}
const callDeleteAdvert = inf => callApi().delete('api/vehicle-adv/', inf);

// Load adverts
function* loadAdverts() {
  try {
    const userData = yield call(callLoadAdverts);
    yield put(loadAdvertsSuccess(userData.data));
  } catch (err) {
    yield put(loadAdvertsError());
  }
}
const callLoadAdverts = () => callApi().get('api/vehicle-adv/');

const advertSaga = [
  takeEvery(CREATE_ADVERT, createAdvert),
  takeEvery(DELETE_ADVERT, deleteAdvert),
  takeEvery(LOAD_ADVERTS, loadAdverts)
];

export default advertSaga;
