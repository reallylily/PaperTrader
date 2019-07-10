import {
    RECEIVE_WATCHLISTS,
    RECEIVE_WATCHLIST,
    REMOVE_WATCHLIST,
  } from '../actions/watchlist_actions';
  import merge from 'lodash/merge';
  
  const watchlistsReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state)
    switch(action.type){
      case RECEIVE_WATCHLISTS:
        return merge({}, newState, action.watchlists)
      case RECEIVE_WATCHLIST:
        newState[action.watchlist.id] = action.watchlist;
        return newState
      case REMOVE_WATCHLIST:
        delete newState[action.watchlistId]
        return newState
      default:
        return state
    }
  };
  
  export default watchlistsReducer;
  