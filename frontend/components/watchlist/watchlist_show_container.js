import { connect } from 'react-redux';
import {
    requestWatching5y,
    requestWatching1y,
    requestWatching3m,
    requestWatching1m,
    requestWatching5d,
    requestWatching1d
 } from '../../actions/watching_actions';
import { requestCompany } from '../../actions/company_actions'
import { createWatchlist,
    deleteWatchlist,
    // requestWatchlists,
 } from '../../actions/watchlist_actions'
import WatchlistShow from './watchlist_show';

const msp = (state, ownProps) => {
    // let stocks = {};
    // Object.values(state.entities.all_stocks).forEach((stock)=>{
    //     stocks[stock.symbol] = stock;
    // })
    // debugger
    // let watchlists = {};
    // state.entities.users[state.session.id].watchlists.forEach(watchlist =>{
    //     watchlists[watchlist.symbol] = watchlist
    // })
    return ({
        // stock: state.entities.stock, 
        // stocks: stocks, 
        // company: state.entities.company,
        currentUser: state.session,
        watching: state.entities.watching,
        // watchlist: {user_id: state.session.id, symbol: ownProps.match.params.symbol },
        watchlists: state.session.watchlists,
        
        // watchlists: watchlists,
    })
}

const mdp = dispatch => ({
    requestWatching5y: symbols => dispatch(requestWatching5y(symbols)),
    requestWatching1y: symbols => dispatch(requestWatching1y(symbols)),
    requestWatching3m: symbols => dispatch(requestWatching3m(symbols)),
    requestWatching1m: symbols => dispatch(requestWatching1m(symbols)),
    requestWatching5d: symbols => dispatch(requestWatching5d(symbols)),
    requestWatching1d: symbols => dispatch(requestWatching1d(symbols)),
    createWatchlist: watchlist => dispatch(createWatchlist(watchlist)),
    deleteWatchlist: watchlistId => dispatch(deleteWatchlist(watchlistId)),


})

export default connect(msp, mdp)(WatchlistShow)