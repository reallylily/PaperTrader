import React from 'react';
// import { Link } from 'react-router-dom';
// import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
// import CustomToolTip from './custom_tooltip'


// function getIntroOfPage(label) {
//   if (label === 'Page A') {
//     return 'Page A is about men's clothing';
//   } if (label === 'Page B') {
//     return 'Page B is about women's dress';
//   } if (label === 'Page C') {
//     return 'Page C is about women's bag';
//   } if (label === 'Page D') {
//     return 'Page D is about household goods';
//   } if (label === 'Page E') {
//     return 'Page E is about food';
//   } if (label === 'Page F') {
//     return 'Page F is about baby food';
//   }
// }

const CustomTooltip = ({ payload, label, active }) => {
  console.log(payload)
  if (active) {
    return (
      <div className="custom-tooltip">
        {/* <p>{console.log(label)}</p> */}
        {/* <p>{payload[0].payload.datetime}</p> */}

        <p>{payload[0].payload.date}</p>
        <p>{payload[0].payload.label}</p>
        <p>${Number.parseFloat(payload[0].payload.close).toFixed(2)}</p>
        {/* <p>{payload[0].payload.time}</p> */}
        {/* <p>${payload[0].payload.close}</p> */}
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        {/* <p className="desc">Anything you want can be displayed here.</p> */}
      </div>
    );
  }

  return null;
}

export default CustomTooltip;