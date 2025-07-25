import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const ImpactChart = ({ type, data, title, color = "#5D4E75", height = 300 }) => {
  const colors = {
    primary: "#5D4E75",
    secondary: "#88B04B", 
    success: "#4A7C59",
    warning: "#D4A574",
    accent: "#F7CAC9"
  };

  const chartColor = colors[color] || color;

  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F8F6F3" />
            <XAxis 
              dataKey="name" 
              stroke="#6B6B6B" 
              fontSize={12}
              fontFamily="Inter, sans-serif"
            />
            <YAxis 
              stroke="#6B6B6B" 
              fontSize={12}
              fontFamily="Inter, sans-serif"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#FEFEFE',
                border: '1px solid #F8F6F3',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(93, 78, 117, 0.08)',
                fontFamily: 'Inter, sans-serif'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={chartColor} 
              strokeWidth={3}
              dot={{ fill: chartColor, strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: chartColor, strokeWidth: 2 }}
            />
          </LineChart>
        );
      
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#F8F6F3" />
            <XAxis 
              dataKey="name" 
              stroke="#6B6B6B" 
              fontSize={12}
              fontFamily="Inter, sans-serif"
            />
            <YAxis 
              stroke="#6B6B6B" 
              fontSize={12}
              fontFamily="Inter, sans-serif"
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#FEFEFE',
                border: '1px solid #F8F6F3',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(93, 78, 117, 0.08)',
                fontFamily: 'Inter, sans-serif'
              }}
            />
            <Bar 
              dataKey="value" 
              fill={chartColor}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        );
      
      case 'pie':
        return (
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={Object.values(colors)[index % Object.values(colors).length]} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{
                backgroundColor: '#FEFEFE',
                border: '1px solid #F8F6F3',
                borderRadius: '8px',
                boxShadow: '0 4px 20px rgba(93, 78, 117, 0.08)',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </PieChart>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-brand">
      <h3 className="font-headline font-semibold text-lg text-text-primary mb-6">{title}</h3>
      <div style={{ width: '100%', height }}>
        <ResponsiveContainer>
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ImpactChart;