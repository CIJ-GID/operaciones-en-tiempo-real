import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, LabelList } from "recharts";

const PieChartComponent = () => {
  const data = [
    { name: "Group A", value: 8 },
    { name: "Group B", value: 3 },
    { name: "Group C", value: 3 },
    { name: "Group D", value: 5 },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius="80%"
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} className="fill-primary stroke-containers" />
          ))}
          <LabelList
            position="outside"
            dataKey="name"
            offset={10}
            className="text-sm font-extralight 2xl:text-2xl"
          />
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default PieChartComponent;
