import React from 'react';
import { Link } from 'react-router-dom';

class StockIndex extends React.Component {
    constructor(props) {
        super(props)
        // if (this.index === undefined) this.index = {}
        // this.index = {}
    }

    componentDidMount(){
        // const { currentUser } = this.props;
        
        
        // console.log(this)
        
        this.props.requestAllStocks().then(stock => {
            // this.props.stocks[stock.symbol] = stock
        })
    }
    
    render() {
        return (
            <div>
                {console.log(this)}
            </div>
        );
    }
}

export default StockIndex;