import {
    // FETCH_ALL_STOCKS,
    RECEIVE_STOCK
  } from '../actions/stock_actions';
import merge from 'lodash/merge'
  
  const stockReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch(action.type) {
    //   case FETCH_ALL_STOCKS:
    //     return  merge({}, newState, action.all_stocks);
    case RECEIVE_STOCK:
        // debugger
        // newState[action.stock] = action.stock;
        return  merge({}, newState, action.stock);

        // return newState
      default:
        return state;
    }
  };

  
  
  export default stockReducer;