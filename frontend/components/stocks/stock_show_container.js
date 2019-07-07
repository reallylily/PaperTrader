import { connect } from 'react-redux';
import { requestAllStocks, requestStock } from '../../actions/stock_actions';
import StockShow from './stock_show';

const msp = (state) => {
    // let stock = state.entities.stock
    // let stock = {};
    // Object.values(state.entities.stock).forEach((stock)=>{
    //     stock[stock.symbol] = stock;
    // })
    return ({stock: state.entities.stock})
}

const mdp = dispatch => ({
    // requestAllStocks: () => dispatch(requestAllStocks()),
    requestStock: symbol => dispatch(requestStock(symbol))
})

export default connect(msp, mdp)(StockShow)