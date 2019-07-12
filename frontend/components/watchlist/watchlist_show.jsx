import React from 'react';
import NavContainer from '../nav/nav_container'
// import WatchlistFormContainer from '../watchlist/watchlist_form_container'
// import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import WatchlistIndexItem from './watchlist_index_item'
import StockIndexItem from '../stocks/stock_index_item'
import Chart from '../chart/chart'



class WatchlistShow extends React.Component {
  componentDidMount() {
    const symbols = Object.keys(this.props.currentUser.portfolio).join(',')
    this.props.requestWatching1d(symbols);
    // const watch_symbols = Object.values(this.props.watchlists).map(watchlist => (watchlist.symbol)).join(',')
    // this.props.requestWatching1d(watch_symbols);

  }
  
  render () {
    // For Stock Index
    const stock_index = Object.keys(this.props.currentUser.portfolio).map(symbol=>(
      <StockIndexItem symbol={symbol} key={symbol} shares={this.props.currentUser.portfolio[symbol]} watching={this.props.watching[symbol]}/>
    ))
    // For Watchlist Index
    const watchlist_index = Object.values(this.props.currentUser.watchlists).map(watchlist=>(
      <WatchlistIndexItem watchlist={watchlist} key={watchlist.symbol} watching={this.props.watching[watchlist.symbol]}/>
    ))
    // For Watchlist Chart
    let data = []
    const symbols = Object.keys(this.props.currentUser.portfolio).join(',')


    Object.values(this.props.watching).forEach(watch =>{
      console.log(watch)
      watch.chart.forEach((dot, i)=>{
        if (!data[i]) data[i] = {};
        if (!data[i].date) data[i].date = dot.date;
        if (!data[i].minute) data[i].minute = dot.minute;
        if (!data[i].label) data[i].label = dot.label;
        if (!dot.close) dot.close = watch.chart[i-1].close;
        if (!data[i].close) data[i].close = dot.close;
        // console.log(this.props.currentUser.portfolio[watch.quote.symbol])
        // console.log(watch.quote.symbol)
        data[i].close += dot.close * this.props.currentUser.portfolio[watch.quote.symbol]
      })
    })

    return (
      <div>

        <div className='for-space-between'>

          <div className='stock-show-box'>

            {/* <h1 className='company-name'>Portfolio</h1> */}
            <h1 className='company-name'>${(data[data.length-1]) ? Number.parseFloat(data[data.length-1].close).toFixed(2) : null }</h1>

            <Chart data={data}/>

            <div className="button-time-period">
              <button onClick={()=>this.props.requestWatching1d(symbols)}>1D</button>
              <button onClick={()=>this.props.requestWatching5d(symbols)}>1W</button>
              <button onClick={()=>this.props.requestWatching1m(symbols)}>1M</button>
              <button onClick={()=>this.props.requestWatching3m(symbols)}>3M</button>
              <button onClick={()=>this.props.requestWatching1y(symbols)}>1Y</button>
              <button onClick={()=>this.props.requestWatching5y(symbols)}>5Y</button>
            </div>
          </div> {/* stock-show-box */}

          <div className='watchlist-index-box'>
            <label>Stocks</label>
              <ul>
                {stock_index}
              </ul>

            <label>WatchList</label>
            <ul>
              {watchlist_index}
            </ul>
          </div> {/* watchlist-index-box */}

        </div> {/* for-space-between  */}

          
      </div>
    );
  } // render

} // class


export default WatchlistShow;

// let trade = {user_id: 2 , symbol: 'AMZN', shares: 10, price: 100, trade_type: 'buy'}
  