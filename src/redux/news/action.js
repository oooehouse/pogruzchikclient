import {
  ADD_NEWS,
  ADD_NEWS_SUCCESS,
  ADD_NEWS_ERROR,
  DELETE_NEWS,
  DELETE_NEWS_SUCCESS,
  DELETE_NEWS_ERROR,
  CHANGE_NEWS,
  CHANGE_NEWS_SUCCESS,
  CHANGE_NEWS_ERROR
} from './types';

// Add news
export const addNews = data => ({
  type: ADD_NEWS,
  payload: data
});
export const addNewsSuccess = data => ({
  type: ADD_NEWS_SUCCESS,
  payload: data
});
export const addNewsError = () => ({
  type: ADD_NEWS_ERROR
});

// Delete news
export const deleteNews = data => ({
  type: DELETE_NEWS,
  payload: data
});
export const deleteNewsSuccess = data => ({
  type: DELETE_NEWS_SUCCESS,
  payload: data
});
export const deleteNewsError = () => ({
  type: DELETE_NEWS_ERROR
});

// Change news
export const changeNews = data => ({
  type: CHANGE_NEWS,
  payload: data
});
export const changeNewsSuccess = data => ({
  type: CHANGE_NEWS_SUCCESS,
  payload: data
});
export const changeNewsError = () => ({
  type: CHANGE_NEWS_ERROR
});
