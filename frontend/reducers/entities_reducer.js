import { combineReducers } from 'redux';

import users from './users_reducer';
import all_stocks from './stocks_reducer';
import stock from './stock_reducer';
import company from './company_reducer';
import watching from './watching_reducer'
// import watchlists from './watchlist_reducer'


export default combineReducers({
  // users,
  all_stocks,
  stock,
  company,
  watching,
  // watchlists,
});
