import * as APIUtil from '../util/watching_api_util';

export const RECEIVE_WATCHING = 'RECEIVE_WATCHING';

export const receiveWatching = watching => ({
    type: RECEIVE_WATCHING,
    watching
});
  

// 5y 1y 3m 1m 5d 1d
export const requestWatching5y = (symbol) => dispatch => (
    APIUtil.fetchWatching5y(symbol).then(symbol => dispatch(receiveWatching(symbol)))
);
export const requestWatching1y = (symbol) => dispatch => (
    APIUtil.fetchWatching1y(symbol).then(symbol => dispatch(receiveWatching(symbol)))
);
export const requestWatching3m = (symbol) => dispatch => (
    APIUtil.fetchWatching3m(symbol).then(symbol => dispatch(receiveWatching(symbol)))
);
export const requestWatching1m = (symbol) => dispatch => (
    APIUtil.fetchWatching1m(symbol).then(symbol => dispatch(receiveWatching(symbol)))
);
export const requestWatching5d = (symbol) => dispatch => (
    APIUtil.fetchWatching5d(symbol).then(symbol => dispatch(receiveWatching(symbol)))
);
export const requestWatching1d = (symbol) => dispatch => (
    APIUtil.fetchWatching1d(symbol).then(symbol => dispatch(receiveWatching(symbol)))
);

