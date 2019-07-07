import * as APIUtil from '../util/stock_api_util';

export const FETCH_ALL_STOCKS = 'FETCH_ALL_STOCKS';
export const RECEIVE_STOCK = 'RECEIVE_STOCK';

export const receiveAllStocks = all_stocks => ({
    type: FETCH_ALL_STOCKS,
    all_stocks
});

export const receiveStock = stock => ({
    type: RECEIVE_STOCK,
    stock
});
  
export const requestAllStocks = () => dispatch => (
    APIUtil.fetchAllStocks().then(all_stocks => dispatch(receiveAllStocks(all_stocks)))
);

export const requestStock = (symbol) => dispatch => (
    APIUtil.fetchStock(symbol).then(stock => dispatch(receiveStock(stock)))
);

// export const createStock = stock => dispatch => (
//     APIUtil.createStock(stock).then(stock => dispatch(receiveStock(stock)))
// )
