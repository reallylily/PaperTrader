import {
    // RECEIVE_TRADES,
    RECEIVE_TRADE,
    // REMOVE_WATCHLIST,
  } from '../actions/trade_actions';
  import merge from 'lodash/merge';
  
  const tradeReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state)
    switch(action.type){
    //   case RECEIVE_TRADES:
    //     return merge({}, newState, action.trades)
      case RECEIVE_TRADE:
        newState[action.trade.id] = action.trade;
        return newState
    //   case REMOVE_WATCHLIST:
    //     delete newState[action.tradeId]
    //     return newState
      default:
        return state
    }
  };
  
  export default tradeReducer;
  