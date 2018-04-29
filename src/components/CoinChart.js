import React, { Component } from 'react';
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Legend, Brush, Tooltip, ResponsiveContainer} from 'recharts';

class CoinChart extends Component {
  render() {
    const {data} = this.props;
    
    if(!data) {
      return null;
    }
    return (
      <ResponsiveContainer width='75%' height={300}>
        <AreaChart width={600} height={200} data={data} syncId="anyId" margin={{top: 10, right: 30, left: 0, bottom: 0}}>
          <CartesianGrid strokeDasharray="3 3"/>
          <XAxis dataKey="date"/>
          <YAxis />
          <Tooltip/>
          <Legend verticalAlign="top" height={36}/>
          <Brush />
          <Area type='monotone' dataKey='closing price' stroke='#82ca9d' fill='#82ca9d' />
          <Area type='monotone' dataKey='opening price' stroke='#82ca9d' fill='#34ve32' />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default CoinChart;
