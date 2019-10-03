import { takeEvery, put, call } from 'redux-saga/effects';
import { callApi } from '../../api/api';
import { ADD_NEWS, DELETE_NEWS, CHANGE_NEWS } from './types';

import {
  addNewsSuccess,
  addNewsError,
  deleteNewsSuccess,
  deleteNewsError,
  changeNewsSuccess,
  changeNewsError
} from './action';

// Add news
function* addNews(data) {
  try {
    const newsData = yield call(callAddNews, data.payload);
    yield put(addNewsSuccess(newsData.data));
  } catch (err) {
    yield put(addNewsError());
  }
}
const callAddNews = inf => callApi().post('api/news/', inf);

// Delete news
function* deleteNews(data) {
  try {
    const userData = yield call(callDeleteNews, data.payload);
    yield put(deleteNewsSuccess(userData.data));
  } catch (err) {
    yield put(deleteNewsError());
  }
}
const callDeleteNews = inf => callApi().delete('api/news/', inf);

// Load adverts
function* changeNews() {
  try {
    const userData = yield call(callChangeNews);
    yield put(changeNewsSuccess(userData.data));
  } catch (err) {
    yield put(changeNewsError());
  }
}
const callChangeNews = () => callApi().get('api/news/');

const newsSaga = [
  takeEvery(ADD_NEWS, addNews),
  takeEvery(DELETE_NEWS, deleteNews),
  takeEvery(CHANGE_NEWS, changeNews)
];

export default newsSaga;
