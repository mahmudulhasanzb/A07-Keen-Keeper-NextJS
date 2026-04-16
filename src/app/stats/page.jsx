"use client";
import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StatsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('timeline');
    if (saved) {
      const entries = JSON.parse(saved);
      let callCount = 0;
      let textCount = 0;
      let videoCount = 0;

      entries.forEach(entry => {
        if (entry.type === 'call') callCount++;
        else if (entry.type === 'text') textCount++;
        else if (entry.type === 'video') videoCount++;
      });

      setData([
        { name: 'Calls', value: callCount, color: '#3B82F6' }, // blue-500
        { name: 'Texts', value: textCount, color: '#22C55E' }, // green-500
        { name: 'Videos', value: videoCount, color: '#A855F7' } // purple-500
      ]);
    } else {
      setData([
        { name: 'Calls', value: 0, color: '#3B82F6' },
        { name: 'Texts', value: 0, color: '#22C55E' },
        { name: 'Videos', value: 0, color: '#A855F7' }
      ]);
    }
  }, []);

  const totalInteractions = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h1 className="text-4xl font-bold text-center text-[#244D3F] mb-8">Friendship Analytics</h1>
      
      {totalInteractions === 0 ? (
        <div className="text-center p-10 text-gray-500 bg-base-200 rounded-xl">
          No interactions yet. Start connecting with friends to see your stats!
        </div>
      ) : (
        <div className="bg-base-100 p-8 rounded-2xl shadow-md border max-w-2xl mx-auto">
          <h3 className="text-center text-xl font-medium text-gray-600 mb-6">Interactions Breakdown</h3>
          <div className="w-full h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value} interactions`, 'Count']}
                  contentStyle={{ borderRadius: '10px', padding: '10px' }}
                />
                <Legend verticalAlign="bottom" height={36} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 text-center text-gray-500">
            Total Interactions: <span className="font-bold text-[#244D3F]">{totalInteractions}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default StatsPage;
