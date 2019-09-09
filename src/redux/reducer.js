import { combineReducers } from 'redux';
import news from './news/reducer.js';
const rootReducer = combineReducers({
  news
});

export default rootReducer;
