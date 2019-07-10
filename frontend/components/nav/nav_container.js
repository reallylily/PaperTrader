import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { requestAllStocks } from '../../actions/stock_actions';
import Nav from './nav';

// const mapStateToProps = ({ session, entities: { users } }) => {
const mapStateToProps = (state) => {
  let stocks = {};
  Object.values(state.entities.all_stocks).forEach((stock)=>{
      stocks[stock.symbol] = stock;
  })
  return {
    stocks: stocks,
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  requestAllStocks: () => dispatch(requestAllStocks()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);