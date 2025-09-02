// src/components/CategoryPieChart.js
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ["#0088FE", "#FF8042", "#00C49F", "#FFBB28"];

function CategoryPieChart({ issues }) {
  const data = ["Road", "Garbage", "Streetlight", "Others"].map(cat => ({
    name: cat,
    value: issues.filter(i => i.category === cat).length
  }));
  return (
    <PieChart width={220} height={220}>
      <Pie data={data} cx="50%" cy="50%" outerRadius={70} fill="#8884d8" dataKey="value" label>
        {data.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
}
export default CategoryPieChart;
