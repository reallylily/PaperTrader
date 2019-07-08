import { connect } from 'react-redux';
import { requestAllStocks, 
    requestStock, //dynamic api call
    requestStock5y,
    requestStock1y,
    requestStock3m,
    requestStock1m,
    // requestStock7d,
    requestStock5d,
    requestStock1d
 } from '../../actions/stock_actions';
import StockShow from './stock_show';

const msp = (state) => {
    // let stock = state.entities.stock
    // let stock = {};
    // Object.values(state.entities.stock).forEach((stock)=>{
    //     stock[stock.symbol] = stock;
    // })
    let stocks = {};
    Object.values(state.entities.all_stocks).forEach((stock)=>{
        stocks[stock.symbol] = stock;
    })
    return ({stock: state.entities.stock, stocks: stocks})
}

const mdp = dispatch => ({
    // requestAllStocks: () => dispatch(requestAllStocks()),
    requestStock: symbol => dispatch(requestStock(symbol)),
    requestStock5y: symbol => dispatch(requestStock5y(symbol)),
    requestStock1y: symbol => dispatch(requestStock1y(symbol)),
    requestStock3m: symbol => dispatch(requestStock3m(symbol)),
    requestStock1m: symbol => dispatch(requestStock1m(symbol)),
    requestStock5d: symbol => dispatch(requestStock5d(symbol)),
    requestStock1d: symbol => dispatch(requestStock1d(symbol))
})

export default connect(msp, mdp)(StockShow)