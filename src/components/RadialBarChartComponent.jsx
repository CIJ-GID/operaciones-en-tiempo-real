import React from "react";
import { Legend, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";

export const RadialBarChartComponent = () => {
  const data = [
    {
      name: "Operacion 1",
      value: 31,
      fill: "#8884d8",
    },
    {
      name: "Operacion 2",
      value: 26,
      fill: "#83a6ed",
    },
    {
      name: "Operacion 3",
      value: 15,
      fill: "#8dd1e1",
    },
    {
      name: "Operacion 4",
      value: 18,
      fill: "#8dd1e1",
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="50%"
        outerRadius="100%"
        data={data}
        startAngle={0}
        endAngle={360}
      >
        <RadialBar
          minAngle={15}
          clockWise={true}
          dataKey="value"
          className="fill-primary"
        />
        <Legend
          iconSize={10}
          width={200}
          height={100}
          layout="vertical"
          verticalAlign="middle"
          align="right"
        />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};
