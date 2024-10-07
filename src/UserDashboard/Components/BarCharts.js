import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Sample data
const data = [
  { name: "Mon", actualEarnings: 400, predictedEarnings: 450 },
  { name: "Tue", actualEarnings: 300, predictedEarnings: 320 },
  { name: "Wed", actualEarnings: 500, predictedEarnings: 480 },
  { name: "Thu", actualEarnings: 100, predictedEarnings: 150 },
  { name: "Fri", actualEarnings: 500, predictedEarnings: 480 },
  { name: "Sat", actualEarnings: 400, predictedEarnings: 450 },
  { name: "Sun", actualEarnings: 300, predictedEarnings: 320 }
];



const BarCharts = () => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        {/* Bar for actual earnings */}
        <Bar dataKey="actualEarnings" stackId="a" fill="#12B76A" />

        {/* Bar for predicted earnings, stacked on top of the actual earnings */}
        <Bar dataKey="predictedEarnings" stackId="a" fill="#2e91fa4d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
