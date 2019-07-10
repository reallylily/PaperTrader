import {
    RECEIVE_WATCHING
  } from '../actions/watching_actions';
import merge from 'lodash/merge'
  
  const watchingReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch(action.type) {
    case RECEIVE_WATCHING:
        return  merge({}, action.watching);
      default:
        return state;
    }
  };

  
  
  export default watchingReducer;