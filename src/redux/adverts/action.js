import {
  CREATE_ADVERT,
  CREATE_ADVERT_SUCCESS,
  CREATE_ADVERT_ERROR,
  DELETE_ADVERT,
  DELETE_ADVERT_SUCCESS,
  DELETE_ADVERT_ERROR
} from './types';

// Create advert
export const createAdvert = data => ({
  type: CREATE_ADVERT,
  payload: data
});
export const createAdvertSuccess = data => ({
  type: CREATE_ADVERT_SUCCESS,
  payload: data
});
export const createAdvertError = () => ({
  type: CREATE_ADVERT_ERROR
});

// Delete advert
export const deleteAdvert = data => ({
  type: DELETE_ADVERT,
  payload: data
});
export const deleteAdvertSuccess = data => ({
  type: DELETE_ADVERT_SUCCESS,
  payload: data
});
export const deleteAdvertError = () => ({
  type: DELETE_ADVERT_ERROR
});
