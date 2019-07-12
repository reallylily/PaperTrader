import React from 'react';
import NavContainer from '../nav/nav_container'
import Chart from '../chart/chart'
import TradeContainer from '../trade/trade_form_container'


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
    const symbol = this.props.match.params.symbol
    let data = Object.values(this.props.stock)
    // let price = Object.keys(this.props.stock)
    // let price = this.props
    // debugger

    const addToWatchlist = () => ( <button onClick={this.addToWatchlist}>Add to Watchlist</button> )
    const removeFromWatchlist = () => ( <button onClick={this.removeFromWatchlist}>Remove from Watchlist</button> )
    return (
      <div className='stock-show-box'>
        <NavContainer history={this.props.history}/>
        <h1 className='company-name'>{this.props.company.companyName}</h1>

        <Chart data={data}/>
        <div className="button-time-period">
          <button onClick={()=>this.props.requestStock1d(symbol)}>1D</button>
          <button onClick={()=>this.props.requestStock5d(symbol)}>1W</button>
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
        <TradeContainer symbol={symbol} match={this.props.match}/>
      </div> //stock-show-box
    );
  } //render
} // class
  
export default StockShow;
  