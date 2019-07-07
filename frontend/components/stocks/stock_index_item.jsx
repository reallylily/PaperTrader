import React from 'react';
import { Link } from 'react-router-dom';

const StockIndexItem = ({ stock }) => {
  return (
    <Link to={`/stocks/${stock.symbol}`}>
      <li className='stock-index-item'>
        <div>
          <h5>{stock.symbol}</h5>
        </div>
      </li>
    </Link>
  );
};

export default StockIndexItem;