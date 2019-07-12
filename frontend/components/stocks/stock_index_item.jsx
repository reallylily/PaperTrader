import React from 'react';
import { Link } from 'react-router-dom';

const StockIndexItem = ({ symbol, shares, watching }) => {
  return (
    <Link to={`/stocks/${symbol}`}>
      <li>
        <div className='watchlist-index-item'>
          <p>{symbol}</p>
          <p>{shares} Shares</p>
          <p className='watchlist-index-item-price'>${(watching) ?  (watching.quote.latestPrice): null}</p>
        </div>
      </li>
    </Link>
  );
};

export default StockIndexItem;