import {
  ADD_NEWS_SUCCESS,
  ADD_NEWS_ERROR,
  DELETE_NEWS_SUCCESS,
  DELETE_NEWS_ERROR,
  CHANGE_NEWS_SUCCESS,
  CHANGE_NEWS_ERROR
} from './types';

const initialState = {
  news: [],
  certainNews: null,
  loading: true
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_NEWS_SUCCESS:
      return {
        ...state,
        news: [...state.news, payload],
        loading: false
      };
    case CHANGE_NEWS_SUCCESS:
      return {
        ...state,
        news: [...state.news, payload],
        loading: false
      };
    case DELETE_NEWS_SUCCESS:
      return {
        ...state,
        news: state.news.filter(news => {
          return payload._id !== news._id;
        }),
        loading: false
      };
    case CHANGE_NEWS_ERROR:
    case ADD_NEWS_ERROR:
    case DELETE_NEWS_ERROR:
    default:
      return state;
  }
};
