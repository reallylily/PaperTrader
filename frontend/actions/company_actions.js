import * as APIUtil from '../util/company_api_util';

export const RECEIVE_COMPANY = 'RECEIVE_COMPANY';

export const receiveCompany = company => ({
    type: RECEIVE_COMPANY,
    company
});
  
export const requestCompany = (symbol) => dispatch => (
    APIUtil.fetchCompany(symbol).then(symbol => dispatch(receiveCompany(symbol)))
);