import * as WatchlistAPIUtil from '../util/watchlist_api_util';


export const RECEIVE_WATCHLISTS = 'RECEIVE_WATCHLISTS'
export const RECEIVE_WATCHLIST = 'RECEIVE_WATCHLIST'
export const REMOVE_WATCHLIST = 'REMOVE_WATCHLIST'

const receiveWatchlists = watchlists =>({
    type: RECEIVE_WATCHLISTS,
    watchlists
})

const receiveWatchlist = watchlist =>({
    type: RECEIVE_WATCHLIST,
    watchlist
})

const removeWatchlist = watchlistId =>({
    type: REMOVE_WATCHLIST,
    watchlistId
})

export const requestWatchlists = symbols => dispatch => (
    WatchlistAPIUtil.fetchWatchlists(symbols).then(watchlists => dispatch(receiveWatchlists(watchlists)))
)

export const requestWatchlist = id => dispatch => (
    WatchlistAPIUtil.fetchWatchlist(id).then(watchlist => dispatch(receiveWatchlist(watchlist)))
)

export const createWatchlist = watchlist => dispatch => (
    WatchlistAPIUtil.createWatchlist(watchlist).then(watchlist => dispatch(receiveWatchlist(watchlist)))
)

export const updateWatchlist = watchlist => dispatch => (
    WatchlistAPIUtil.updateWatchlist(watchlist).then(watchlist => dispatch(receiveWatchlist(watchlist)))
)

export const deleteWatchlist = id => dispatch => (
    WatchlistAPIUtil.deleteWatchlist(id).then(watchlist => dispatch(removeWatchlist(id)))
)