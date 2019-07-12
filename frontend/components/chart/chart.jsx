import React from 'react';
// import { Link } from 'react-router-dom';
import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import CustomTooltip from './custom_tooltip'

const Chart = ({ data }) => {
    data.forEach((stock, idx)=>{ 
        if(!stock.close) {
          if (!stock.close && !data[idx-1]) {
            stock.close = stock.marketClose
          } else {
            stock.close = data[idx-1].close
          }
        }
        if (stock.minute) stock.minute =  stock.minute.split(':').join('')
        stock.datetime = Number(stock.date.split('-').join('') + (stock.minute || ''))
    })
    const close = data.map(stock=>(stock.close))
    let min = -Infinity
    let max = Infinity
    if (data.length >= 1) {

        min = close.reduce((acc, el) => (Math.min( acc, el )))
        max = close.reduce((acc, el) => (Math.max( acc, el )))
        
    }
    // debugger
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

        <Tooltip content={<CustomTooltip />} /> 
     </LineChart>
  );
};

export default Chart;