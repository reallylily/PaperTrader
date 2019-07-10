import React from 'react';
import NavContainer from '../nav/nav_container'
// import WatchlistFormContainer from '../watchlist/watchlist_form_container'
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import WatchlistIndexItem from './watchlist_index_item'


class WatchlistShow extends React.Component {
  componentDidMount() {
    const symbols = Object.values(this.props.watchlists).map(watchlist => (watchlist.symbol)).join(',')
    this.props.requestWatching1d(symbols);
  }
  
  render () {
    // For Watchlist Index
    const symbolsIDX = Object.values(this.props.currentUser.watchlists).map(watchlist=>(
      <WatchlistIndexItem watchlist={watchlist} key={watchlist.symbol} watching={this.props.watching[watchlist.symbol]}/>
    ))
    // For Watchlist Chart
    let data = []
    const symbols = Object.values(this.props.watchlists).map(watchlist => (watchlist.symbol)).join(',')

    Object.values(this.props.watching).forEach(watch =>{
      // console.log(watch.chart)
      watch.chart.forEach((dot, i)=>{
        if (!data[i]) data[i] = {};
        if (!data[i].date) data[i].date = dot.date;
        if (!data[i].minute) data[i].minute = dot.minute;
        if (!dot.close) dot.close = watch.chart[i-1].close;
        if (!data[i].close) data[i].close = dot.close;
        data[i].close += dot.close
      })
      // console.log(data)
    })
    data.forEach(stock=>{ stock.datetime = stock.date + ' ' + (stock.minute || '') })
    const close = data.map(stock=>(stock.close))
    // const close = this.props.data ? this.props.data.map((object) => (object.close)) : []
    let min = -Infinity
    let max = Infinity
    if (data.length >= 1) {
      min = close.reduce((acc, el) => (Math.min( acc, el )))
      max = close.reduce((acc, el) => (Math.max( acc, el )))
    }

    return (
      <div>

        <div className='for-space-between'>

          <div className='stock-show-box'>

            <h1 className='company-name'>Portfolio</h1>

            <LineChart className='chart'
              width={676}
              height={196}
              data={data}
              margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
              >
              <XAxis dataKey="datetime" hide={true}/>
              <YAxis dataKey="close" hide={true} domain={[min,max]} />
              <Tooltip />

              <Line type="monotone" dataKey="close" dot={false} stroke='#21ce99' yAxisId={0} />

            </LineChart>
            <div className="button-time-period">
              <button onClick={()=>this.props.requestWatching1d(symbols)}>1D</button>
              <button onClick={()=>this.props.requestWatching5d(symbols)}>5D</button>
              <button onClick={()=>this.props.requestWatching1m(symbols)}>1M</button>
              <button onClick={()=>this.props.requestWatching3m(symbols)}>3M</button>
              <button onClick={()=>this.props.requestWatching1y(symbols)}>1Y</button>
              <button onClick={()=>this.props.requestWatching5y(symbols)}>5Y</button>
            </div>
          </div> {/* stock-show-box */}

          <div className='watchlist-index-box'>
            <ul>
              {symbolsIDX}
            </ul>
          </div> {/* watchlist-index-box */}

        </div> {/* for-space-between  */}

          
      </div>
    );
  } // render

} // class


export default WatchlistShow;
  