import {
    RECEIVE_COMPANY
  } from '../actions/company_actions';
import merge from 'lodash/merge'
  
  const companyReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = merge({}, state);

    switch(action.type) {
    case RECEIVE_COMPANY:
        return  merge({}, action.company);
      default:
        return state;
    }
  };

  
  
  export default companyReducer;