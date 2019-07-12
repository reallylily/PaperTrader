import React from 'react';
// import NavContainer from '../nav/nav_container'
// import Chart from '../chart/chart'


class TradeForm extends React.Component {
  constructor(props){
      super(props);
      // this.state = { watched: false }
      // this.addToWatchlist = this.addToWatchlist.bind(this);
      this.state = this.props.trade
      // this.selectName = this.selectName.bind(this);
      this.handleInputShares = this.handleInputShares.bind(this);
      this.handleInputTradeType = this.handleInputTradeType.bind(this);

      this.handleSubmit = this.handleSubmit.bind(this);
    }
      
      
  componentDidMount() {
    this.props.requestQuote(this.props.symbol).then(quote =>{
      this.setState({ price: quote.quote.close })
    })
  }
  
  componentDidUpdate(prevProps) {
    if (this.props.symbol !== prevProps.symbol) {
      this.state = this.props.trade
    }
  }
  
  handleSubmit(e){
    e.preventDefault();
    this.state.price *= this.state.shares;
    this.props.createTrade(this.state).then(()=>{
      this.props.fetchUser(this.props.currentUser.id).then(()=>{
        // let symbol = this.props.trade.symbol
        // this.setState({ watched: Boolean(this.props.watchlists[symbol]) })
      })
    })
  }

  handleInputShares(event) {
    this.setState({shares: event.currentTarget.value});
  }

  handleInputTradeType(event) {
    this.setState({trade_type: event.currentTarget.value});
  }

  render() {
    return(
      <div>
        <div className='trade-box'>
          <form onSubmit={this.handleSubmit}>
            <label>Buying Power: ${this.props.currentUser.bank}</label>
            <label>Symbol: {this.state.symbol}</label>
            <label>Shares:
                <input
                type='number'
                onChange={this.handleInputShares}
                value={this.state.shares}
                placeholder='Search...'/>
            </label>
            <label>Price:{this.state.price}</label>
            <label>
              <select name="trade_type" onChange={this.handleInputTradeType} >
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
              </select>{this.state.shares} for ${this.state.price * this.state.shares}</label>
            <input type='submit' value={this.state.trade_type}/>
          </form>
        </div>
      </div>
    );
  } //render

} // class
  
export default TradeForm;
  