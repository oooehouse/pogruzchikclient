import {
  CREATE_ADVERT_SUCCESS,
  CREATE_ADVERT_ERROR,
  DELETE_ADVERT_SUCCESS,
  DELETE_ADVERT_ERROR
} from './types';

const initialState = {
  adverts: [],
  certainAdvert: null,
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_ADVERT_SUCCESS:
      return {
        ...state,
        adverts: [...state.adverts, payload],
        loading: false
      };
    case DELETE_ADVERT_SUCCESS:
      return {
        ...state,
        news: state.news.filter(news => {
          return payload._id !== news._id;
        }),
        loading: false
      };
    case CREATE_ADVERT_ERROR:
    case DELETE_ADVERT_ERROR:
    default:
      return state;
  }
};
