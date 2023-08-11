import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    subject: "Grupo 1",
    A: 120,
  },
  {
    subject: "Grupo 2",
    A: 98,
  },
  {
    subject: "Grupo 3",
    A: 86,
  },
  {
    subject: "Grupo 4",
    A: 99,
  },
  {
    subject: "Grupo 5",
    A: 85,
  },
  {
    subject: "Grupo 6",
    A: 65,
  },
];

const RadarChartComponent = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius="80%" data={data} className="2xl:text-3xl">
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <Radar dataKey="A" className="fill-primary/70" />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChartComponent;
