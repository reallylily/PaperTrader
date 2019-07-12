import { connect } from 'react-redux';
import { createTrade } from '../../actions/trade_actions';
 import { requestQuote } from '../../actions/stock_actions';
import { fetchUser } from '../../actions/session_actions'
import TradeForm from './trade_form';

const msp = (state, ownProps) => {
    // debugger
    return ({
        currentUser: state.session,
        trade: {
            user_id: state.session.id, 
            symbol: ownProps.symbol, 
            shares: 0, 
            price: state.entities.quote.close, 
            trade_type: 'Buy'
        },
        trades: state.session.trades,
    })
}

const mdp = dispatch => ({

    fetchUser: user_id => dispatch(fetchUser(user_id)),
    requestQuote: symbol => dispatch(requestQuote(symbol)),

    createTrade: trade => dispatch(createTrade(trade)),
})

export default connect(msp, mdp)(TradeForm)