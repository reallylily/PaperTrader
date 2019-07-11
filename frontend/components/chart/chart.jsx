import React from 'react';
// import { Link } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';


const Chart = ({ data }) => {
    data.forEach((stock, idx)=>{ 
        if(!stock.close) stock.close = data[idx-1].close
        stock.datetime = stock.date + ' ' + (stock.minute || '') 
    })
    const close = data.map(stock=>(stock.close))
    let min = -Infinity
    let max = Infinity
    if (data.length >= 1) {

        min = close.reduce((acc, el) => (Math.min( acc, el )))
        max = close.reduce((acc, el) => (Math.max( acc, el )))
        
    }
  return (
    <LineChart className='chart'
        width={676}
        height={196}
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
        <XAxis dataKey="datetime" hide={true}/>
        <YAxis dataKey="close" hide={true} domain={[min, max]}/>

        <Line type="monotone" dataKey="close" dot={false} stroke='#21ce99' yAxisId={0} />

        <Tooltip /> 
     </LineChart>
  );
};

export default Chart;