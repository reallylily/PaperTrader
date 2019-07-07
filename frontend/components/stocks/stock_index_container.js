import { connect } from 'react-redux';
import { requestAllStocks, requestStock } from '../../actions/stock_actions';
import StockIndex from './stock_index';

const msp = (state) => {
    let stocks = {};
    Object.values(state.entities.all_stocks).forEach((stock)=>{
        stocks[stock.symbol] = stock;
    })
    return ({stocks: stocks})
}

const mdp = dispatch => ({
    requestAllStocks: () => dispatch(requestAllStocks()),
    // requestStock: stock => dispatch(requestStock(stock))
})

export default connect(msp, mdp)(StockIndex)