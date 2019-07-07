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
        
        
        // if (Object.keys(this.props.stocks).length ===0 ) {
            this.props.requestAllStocks()
        // }
    }
    
    render() {
        return (
            <div>
                {console.log(this.props.stocks)}
            </div>
        );
    }
}

export default StockIndex;