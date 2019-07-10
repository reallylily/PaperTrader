import React from 'react';
import NavContainer from '../nav/nav_container'
// import WatchlistFormContainer from '../watchlist/watchlist_form_container'
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import WatchlistIndexItem from './watchlist_index_item'


class WatchlistShow extends React.Component {

  render () {
    const symbols = Object.values(this.props.watchlists).map(watchlist=>(
      <WatchlistIndexItem watchlist={watchlist} key={watchlist.symbol}/>
    ))

    return (
      <div className='watchlist-stock-show-box'>
        {console.log(symbols)}
        <ul>
            {symbols}
        </ul>
      </div>
    );
  } // render

} // class


export default WatchlistShow;
  