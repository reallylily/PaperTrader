import { combineReducers } from 'redux';

import users from './users_reducer';
import all_stocks from './stocks_reducer'


export default combineReducers({
  users,
  all_stocks,
});
