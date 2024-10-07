import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

// Sample data
const data = [
  { name: 'Jan', earned: 4000, forecasted: 4500 },
  { name: 'Feb', earned: 3000, forecasted: 3500 },
  { name: 'Mar', earned: 5000, forecasted: 4800 },
  { name: 'Apr', earned: 6000, forecasted: 6200 },
  { name: 'May', earned: 7000, forecasted: 6800 },
  { name: 'Jun', earned: 4000, forecasted: 4500 },
  { name: 'Jul', earned: 3000, forecasted: 3500 },
  { name: 'Aug', earned: 5000, forecasted: 4800 },
  { name: 'Sept', earned: 6000, forecasted: 6200 },
  { name: 'Oct', earned: 7000, forecasted: 6800 },
  { name: 'Nov', earned: 6000, forecasted: 6500 },
  { name: 'Dec', earned: 5000, forecasted: 5500 }
];

const LineCharts = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        
        {/* Actual earnings line */}
        <Line
          type="monotone"
          dataKey="earned"
          stroke="#0C5B1B"
          activeDot={{ r: 8 }}
        />
        
        {/* Forecasted earnings line */}
        <Line
          type="monotone"
          dataKey="forecasted"
          stroke="#12B76A"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineCharts;
