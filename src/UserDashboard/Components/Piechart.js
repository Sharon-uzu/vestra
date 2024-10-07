import React from 'react'
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';


const data = [
    { name: 'Capital', value: 1000 },
    { name: 'Cashback', value: 200 },
    
  ];
  
  const COLORS = ['#0F7A23','#3BD858'];


const Piechart = () => {

    const totalValue = data.reduce((sum, { value }) => sum + value, 0);
    const centerPosition = { x: 100, y: 100 }; // Center of the doughnut chart
    const titlePosition = { x: centerPosition.x, y: centerPosition.y }; // Title position
    const margin = { top: 5, left: 5 }; 


  return (
    <div>
        <PieChart width={350} height={200}>
                <Pie
                    data={data}
                    cx={100}
                    cy={100}
                    outerRadius={80}
                    innerRadius={55}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>

                <text
                    x={titlePosition.x + margin.left}
                    y={titlePosition.y + margin.top}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontSize: '14px', color:'#5e5e5e' }}
                >
                    20% ROI
                </text>
                <Tooltip />
                <Legend
                    layout="vertical"
                    align="right"
                    verticalAlign="middle"
                    iconSize={8}
                    iconType="circle"
                />
            </PieChart>
    </div>
  )
}

export default Piechart