import {
    RECEIVE_STOCK,
    // RECEIVE_QUOTE,
  } from '../actions/stock_actions';
import merge from 'lodash/merge'
  
  const stockReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch(action.type) {
    case RECEIVE_STOCK:
        return  merge({}, action.stock);
    // case RECEIVE_QUOTE:
    //     return  merge({}, action.quote);
      default:
        return state;
    }
  };

  
  
  export default stockReducer;