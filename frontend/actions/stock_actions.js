import * as APIUtil from '../util/stock_api_util';

export const FETCH_ALL_STOCKS = 'FETCH_ALL_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';
export const RECEIVE_QUOTE ='RECEIVE_QUOTE'

export const receiveAllStocks = all_stocks => ({
    type: FETCH_ALL_STOCKS,
    all_stocks
});

export const receiveStock = stock => ({
    type: RECEIVE_STOCK,
    stock
});

export const receiveQuote = quote => ({
    type: RECEIVE_QUOTE,
    quote
});

  
export const requestAllStocks = () => dispatch => (
    APIUtil.fetchAllStocks().then(all_stocks => dispatch(receiveAllStocks(all_stocks)))
);

export const requestQuote = (symbol) => dispatch => (
    APIUtil.fetchQuote(symbol).then(symbol => dispatch(receiveQuote(symbol)))
);

// 5y 1y 3m 1m 7d 1d
export const requestStock5y = (symbol) => dispatch => (
    APIUtil.fetchStock5y(symbol).then(symbol => dispatch(receiveStock(symbol)))
);
export const requestStock1y = (symbol) => dispatch => (
    APIUtil.fetchStock1y(symbol).then(symbol => dispatch(receiveStock(symbol)))
);
export const requestStock3m = (symbol) => dispatch => (
    APIUtil.fetchStock3m(symbol).then(symbol => dispatch(receiveStock(symbol)))
);
export const requestStock1m = (symbol) => dispatch => (
    APIUtil.fetchStock1m(symbol).then(symbol => dispatch(receiveStock(symbol)))
);
export const requestStock5d = (symbol) => dispatch => (
    APIUtil.fetchStock5d(symbol).then(symbol => dispatch(receiveStock(symbol)))
);
export const requestStock1d = (symbol) => dispatch => (
    APIUtil.fetchStock1d(symbol).then(symbol => dispatch(receiveStock(symbol)))
);

