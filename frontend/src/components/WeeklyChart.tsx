// frontend/src/components/WeeklyChart.tsx
// --- MODIFIED FILE ---
// Swapped the BarChart for a LineChart for a different visual style.

import React from 'react';
// Import LineChart and Line instead of BarChart and Bar
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartData {
  name: string;
  co2: number;
}

interface WeeklyChartProps {
  data: ChartData[];
}

const WeeklyChart: React.FC<WeeklyChartProps> = ({ data }) => {
  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        {/* Use LineChart component */}
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" stroke="#333" />
          <YAxis stroke="#333" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#ffffff', 
              border: '1px solid #cccccc' 
            }}
          />
          {/* Use Line component */}
          <Line 
            type="monotone" 
            dataKey="co2" 
            stroke="#000000" 
            strokeWidth={2} 
            activeDot={{ r: 8 }} 
            name="CO₂ (kg)" 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default WeeklyChart;