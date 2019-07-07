import React from 'react';
import NavContainer from '../nav/nav_container'


class StockShow extends React.Component {
    componentDidMount() {
      const symbol = this.props.match.params.symbol;
    //   console.log(this.props.requestStock(symbol))
    //   if (!this.props.stock) {
        this.props.requestStock(symbol);
    //   }
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.match.params.symbol !== prevProps.match.params.symbol) {
        const symbol = this.props.match.params.symbol;
        this.props.requestStock(symbol);
      }
    }
  
    render() {
      const { stock, currentUser, logout, createTrade, errors } = this.props;
      const close = Object.values(this.props.stock).map(stock=>{
          return (
            stock.close
          )
      })
      return (
        <div>
            <NavContainer/>
            <ul className='show-price-close'>{close}</ul>
            {console.log(this.props.stock)}
        </div>
      );
    }
  }
  
  export default StockShow;
  