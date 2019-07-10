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
    // console.log(this.props)
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
    this.props.createWatchlist(this.props.watchlist).then(()=>{
      this.props.fetchUser(this.props.currentUser.id).then(()=>{
        let symbol = this.props.watchlist.symbol
        this.setState({ watched: Boolean(this.props.watchlists[symbol]) })
      })
    })
  }

  removeFromWatchlist(e){
    e.preventDefault();
    let symbol = this.props.watchlist.symbol
    this.props.deleteWatchlist(this.props.currentUser.watchlists[symbol].id).then(()=>{
      this.props.fetchUser(this.props.currentUser.id).then(()=>{
        let symbol = this.props.watchlist.symbol
        this.setState({ watched: Boolean(this.props.watchlists[symbol]) })
      })
    })
  }

  render() {
    console.log(this.state.watched)
    const symbol = this.props.match.params.symbol
    let stock_array = Object.values(this.props.stock)
    stock_array.forEach((stock, idx)=>{ 
      if(!stock.close) stock.close = stock_array[idx-1].close
      stock.datetime = stock.date + ' ' + (stock.minute || '') 
    })
    const close = stock_array.map(stock=>(stock.close))
    let min = -Infinity
    let max = Infinity
    if (stock_array.length >= 1) {

      min = close.reduce((acc, el) => (Math.min( acc, el )))
      max = close.reduce((acc, el) => (Math.max( acc, el )))
      
    }
    const addToWatchlist = () => ( <button onClick={this.addToWatchlist}>Add to Watchlist</button> )
    const removeFromWatchlist = () => ( <button onClick={this.removeFromWatchlist}>Remove from Watchlist</button> )
    return (
      <div className='stock-show-box'>
        <NavContainer/>
        <h1 className='company-name'>{this.props.company.companyName}</h1>
        <LineChart className='chart'
          width={676}
          height={196}
          data={stock_array}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
          >
          <XAxis dataKey="datetime" hide={true}/>
          <YAxis dataKey="close" hide={true} domain={[min, max]}/>

          <Line type="monotone" dataKey="close" dot={false} stroke='#21ce99' yAxisId={0} />

          <Tooltip /> 
        </LineChart>
        <div className="button-time-period">
          <button onClick={()=>this.props.requestStock1d(symbol)}>1D</button>
          <button onClick={()=>this.props.requestStock5d(symbol)}>5D</button>
          <button onClick={()=>this.props.requestStock1m(symbol)}>1M</button>
          <button onClick={()=>this.props.requestStock3m(symbol)}>3M</button>
          <button onClick={()=>this.props.requestStock1y(symbol)}>1Y</button>
          <button onClick={()=>this.props.requestStock5y(symbol)}>5Y</button>
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
        { this.state.watched ? removeFromWatchlist() : addToWatchlist() }

      </div> //stock-show-box
    );
  } //render
} // class
  
export default StockShow;
  