import React from 'react';
import { Link } from 'react-router-dom';
import StockIndexItem from './stock_index_item'

class StockIndex extends React.Component {
    constructor(props) {
        super(props)
        // if (this.index === undefined) this.index = {}
        // this.index = {}
    }

    // componentDidMount(){
    //     if ( Object.values(this.props.stocks).length === 0 ) this.props.requestAllStocks()
    // }
    
    render() {
        const stock = Object.values(this.props.stocks).map(stock =>{
            return (
                <StockIndexItem stock={stock} key={stock.symbol}/>
            )

            
        })
        return (
            <div>
                <ul>
                    {stock}
                </ul>
                {console.log(this)}
            </div>
        );
    }
}

export default StockIndex;