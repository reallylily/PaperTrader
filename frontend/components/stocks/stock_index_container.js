import { connect } from 'react-redux';
import { requestAllStocks, requestStock } from '../../actions/stock_actions';
import StockIndex from './stock_index';

const msp = (state) => ({
    all_stocks: state.all_stocks
})

const mdp = dispatch => ({
    requestAllStocks: () => dispatch(requestAllStocks()),
    requestStock: stock => dispatch(requestStock(stock))
})

export default connect(msp, mdp)(StockIndex)