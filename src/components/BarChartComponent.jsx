import React from "react";
import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Bar,
} from "recharts";

const data = [
  {
    name: "Grupo 1",
    value: 10,
  },
  {
    name: "Grupo 2",
    value: 30,
  },
  {
    name: "Grupo 3",
    value: 8,
  },
  {
    name: "Grupo 4",
    value: 37,
  },
  {
    name: "Grupo 1",
    value: 10,
  },
  {
    name: "Grupo 2",
    value: 30,
  },
  {
    name: "Grupo 3",
    value: 8,
  },
  {
    name: "Grupo 4",
    value: 37,
  },
];

const BarChartComponent = () => {
  return (
    <ResponsiveContainer width={"100%"} height={"100%"}>
      <BarChart width={730} height={250} data={data} className="2xl:text-4xl">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" className="fill-enfasis" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
