import React from 'react';
import NavContainer from '../nav/nav_container'
// import WatchlistFormContainer from '../watchlist/watchlist_form_container'
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



class StockShow extends React.Component {
  constructor(props){
    super(props);
    this.state = { watched: false }
    this.addToWatchlist = this.addToWatchlist.bind(this);
    this.removeFromWatchlist = this.removeFromWatchlist.bind(this);
  }

  
  componentDidMount() {
    const symbol = this.props.match.params.symbol;
    this.props.requestStock1d(symbol);
    this.props.requestCompany(symbol);
    this.setState({watched: Boolean(this.props.watchlists[symbol])})
    // this.stockInWatchlist = !!this.props.watchlists[symbol]
  }
    
  componentDidUpdate(prevProps) {
    if (this.props.match.params.symbol !== prevProps.match.params.symbol) {
      const symbol = this.props.match.params.symbol;
      this.props.requestStock1d(symbol);
      this.props.requestCompany(symbol);
    }
    // if ()
  }
    
  addToWatchlist(e){
    e.preventDefault();
    this.props.createWatchlist(this.props.watchlist);
    this.setState({ watched: true })
  }

  removeFromWatchlist(e){
    e.preventDefault();
    let symbol = this.props.watchlist.symbol
    console.log(symbol)
    this.props.deleteWatchlist(this.props.watchlists[symbol].id);
    this.setState({ watched: false })
  }

  render() {
    const symbol = this.props.match.params.symbol
    const close = Object.values(this.props.stock).map(stock=>(stock.close))
    let min = -Infinity
    let max = Infinity
    if (Object.values(this.props.stock).length >= 1) {
      min = close.reduce((acc, el) => (Math.min( acc, el )))
      max = close.reduce((acc, el) => (Math.max( acc, el )))
      
      Object.values(this.props.stock).forEach(stock=>{ stock.datetime = stock.date + ' ' + (stock.minute || '') })
    }
    const addToWatchlist = () => ( <button onClick={this.addToWatchlist}>Add to Watchlist</button> )
    const removeFromWatchlist = () => ( <button onClick={this.removeFromWatchlist}>Remove from Watchlist</button> )
    return (
      <div className='stock-show-box'>
        <h1 className='company-name'>{this.props.company.companyName}</h1>
        <NavContainer/>
        <LineChart className='chart'
          width={676}
          height={196}
          data={Object.values(this.props.stock)}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
          <XAxis dataKey="datetime" hide={true}/>
          <YAxis dataKey="close" hide={true} domain={[min, max]}/>
          <Tooltip />

          <Line type="monotone" dataKey="close" dot={false} stroke='#21ce99' yAxisId={0} />

        </LineChart>
        <div className="button-time-period">
          <button onClick={()=>this.props.requestStock5y(symbol)}>5Y</button>
          <button onClick={()=>this.props.requestStock1y(symbol)}>1Y</button>
          <button onClick={()=>this.props.requestStock3m(symbol)}>3M</button>
          <button onClick={()=>this.props.requestStock1m(symbol)}>1M</button>
          <button onClick={()=>this.props.requestStock5d(symbol)}>5D</button>
          <button onClick={()=>this.props.requestStock1d(symbol)}>1D</button>
        </div>
        <div className="about-box">
          <label className="about">About
          </label>
          <p className="description">{this.props.company.description}</p>
          <div className="details-box">
            <label>CEO<p>{this.props.company.CEO}</p></label>
            <label>Employees<p>{this.props.company.employees}</p></label>
            <label>Security Name<p>{this.props.company.securityName}</p></label>
            <label>Exchange<p>{this.props.company.exchange}</p></label>
          </div>
          <div className="details-box">
            <label>Industry<p>{this.props.company.industry}</p></label>
            <label>Sector<p>{this.props.company.sector}</p></label>
          </div>
        </div>
        {console.log(this.props.watchlists[symbol])}
        {console.log(symbol)}
        { this.state.watched ? removeFromWatchlist() : addToWatchlist() }

      </div> //stock-show-box
    );
  } //render
} // class
  
export default StockShow;
  