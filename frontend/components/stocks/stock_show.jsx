import React from 'react';
import NavContainer from '../nav/nav_container'
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';



class StockShow extends React.Component {
    componentDidMount() {
      const symbol = this.props.match.params.symbol;
    //   if (!this.props.stock) {
        this.props.requestStock1d(symbol);
    //   }
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.match.params.symbol !== prevProps.match.params.symbol) {
        const symbol = this.props.match.params.symbol;
        this.props.requestStock1d(symbol);
      }
    }
  
    render() {
      // const { stock, currentUser, logout, createTrade, errors } = this.props;
      const symbol = this.props.match.params.symbol
      const close = Object.values(this.props.stock).map(stock=>(stock.close))
      let min = -Infinity
      let max = Infinity
      if (close.length >= 1) {
          min = close.reduce((acc, el) => (Math.min( acc, el )))
          max = close.reduce((acc, el) => (Math.max( acc, el )))

          Object.values(this.props.stock).forEach(stock=>{ stock.datetime = stock.date + ' ' + (stock.minute || '') })
          // forEach(stock=>{
          //   if (stock[datetime] === undefined) stock[datetime] = '';
          //   stock[datetime] =  stock[date] + stock[minute];
          // })
      }
 
      return (
        <div>
            <NavContainer/>
            <LineChart className='chart'
                width={676}
                height={196}
                data={Object.values(this.props.stock)}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="datetime" hide={true}/>
                <YAxis dataKey="close" hide={true} domain={[min, max]}/>
                <Tooltip />

                <Line type="monotone" dataKey="close" dot={false} stroke='#21ce99' yAxisId={0} />

                {/* <CartesianGrid stroke="#f5f5f5" /> */}
                {/* <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} /> */}
                {/* <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} /> */}
            </LineChart>
            <button onClick={()=>this.props.requestStock5y(symbol)}>5Y</button>
            <button onClick={()=>this.props.requestStock1y(symbol)}>1y</button>
            <button onClick={()=>this.props.requestStock3m(symbol)}>3M</button>
            <button onClick={()=>this.props.requestStock1m(symbol)}>1m</button>
            <button onClick={()=>this.props.requestStock5d(symbol)}>5d</button>
            <button onClick={()=>this.props.requestStock1d(symbol)}>1d</button>
            {/* <ul className='show-price-close'>{close}</ul> */}
            {console.log(symbol)}
        </div>
      );
    }
  }
  
  // requestStock5y,
  // requestStock1y,
  // requestStock3m,
  // requestStock1m,
  // requestStock7d,
  // requestStock1d

  export default StockShow;
  