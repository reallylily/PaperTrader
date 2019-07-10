import React from 'react';
import { Link } from 'react-router-dom';

const WatchlistIndexItem = ({ watchlist }) => {
  return (
    <Link to={`/stocks/${watchlist.symbol}`}>
      <li className='watchlist-index-item'>
        <div>
          <h5>{watchlist.symbol}</h5>
        </div>
      </li>
    </Link>
  );
};

export default WatchlistIndexItem;