import React from 'react';
import { Link } from 'react-router-dom';
import StockIndexItem from './stock_index_item'

class StockIndex extends React.Component {
    constructor(props) {
        super(props)
    }
    
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
            </div>
        );
    }
}

export default StockIndex;