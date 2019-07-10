import {
    RECEIVE_STOCK
  } from '../actions/stock_actions';
import merge from 'lodash/merge'
  
  const stockReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch(action.type) {
    case RECEIVE_STOCK:
        return  merge({}, action.stock);
      default:
        return state;
    }
  };

  
  
  export default stockReducer;