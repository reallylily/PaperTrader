//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {

      let newWatchlists = {}
      window.currentUser.watchlists.forEach(watchlist=>{
        newWatchlists[watchlist.symbol] = watchlist;
      })
      window.currentUser.watchlists = newWatchlists;

      let portfolio = {}
      window.currentUser.trades.forEach(trade=>{
        if (trade.trade_type === "Buy") {
          if (!portfolio[trade.symbol]) portfolio[trade.symbol] = 0;
          portfolio[trade.symbol] += trade.shares;
        } else {
          portfolio[trade.symbol] -= trade.shares;
        }
      })
      window.currentUser.portfolio = portfolio;

    const preloadedState = {
      session:  window.currentUser ,
      entities: {
        // users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
