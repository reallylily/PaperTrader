import * as TradeAPIUtil from '../util/trade_api_util';


export const RECEIVE_TRADE = 'RECEIVE_TRADE'

const receiveTrade = trade =>({
    type: RECEIVE_TRADE,
    trade
})

export const createTrade = trade => dispatch => (
    TradeAPIUtil.createTrade(trade).then(trade => dispatch(receiveTrade(trade)))
)