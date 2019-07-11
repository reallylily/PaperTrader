import { connect } from 'react-redux';

// import { updateFilter } from '../../actions/filter_actions';
// import { asArray } from '../../reducers/selectors';
import { requestAllStocks } from '../../actions/stock_actions';

import Search from './search';

const mapStateToProps = (state, ownProps) => {
  let stocks = {};
  Object.values(state.entities.all_stocks).forEach((stock)=>{
      stocks[stock.symbol] = stock;
  })
  // debugger
  return ({
    stocks: stocks,
    symbols: Object.keys(stocks),
    history: ownProps.history,
  });
}

const mapDispatchToProps = dispatch => ({
  requestAllStocks: () => dispatch(requestAllStocks()),

  // updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
