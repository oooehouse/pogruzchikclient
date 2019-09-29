import { combineReducers } from 'redux';
import news from './news/reducer.js';
import user from './user/reducer.js';
import adverts from './adverts/reducer.js';
import alert from './alert/reducer.js';

const rootReducer = combineReducers({
  news,
  user,
  adverts,
  alert
});

export default rootReducer;
