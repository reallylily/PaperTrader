import React from 'react';
import { Link } from 'react-router-dom';

const WatchlistIndexItem = ({ watchlist, watching }) => {
  return (
    <Link to={`/stocks/${watchlist.symbol}`}>
      <li>
        <div className='watchlist-index-item'>
          <p>{watchlist.symbol}</p>
          <p className='watchlist-index-item-price'>${(watching) ?  (watching.quote.latestPrice): null}</p>
        </div>
      </li>
    </Link>
  );
};

export default WatchlistIndexItem;