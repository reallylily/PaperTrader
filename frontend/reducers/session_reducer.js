import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/session_actions';

const _nullUser = Object.freeze({
  id: null,
  session_token: null,
});

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      let newWatchlists = {}
      action.currentUser.watchlists.forEach(watchlist=>{
        newWatchlists[watchlist.symbol] = watchlist;
      })
      action.currentUser.watchlists = newWatchlists;
      return action.currentUser
    case LOGOUT_CURRENT_USER:
      return _nullUser;
    default:
      return state;
  }
};

export default sessionReducer;
