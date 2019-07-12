import React from 'react';
import NavContainer from '../nav/nav_container'
import StockIndexContainer from '../stocks/stock_index_container'
import WatchlistShowContainer from '../watchlist/watchlist_show_container'
import { Link } from 'react-router-dom';

class Home extends React.Component {

  render() {
    const { history } = this.props;
  
    return (
      <div>
        <div className='nav-box'>
          <NavContainer history={history} />
        </div>
        <WatchlistShowContainer />
      </div>
    )
  } // render
} // class


export default Home;
