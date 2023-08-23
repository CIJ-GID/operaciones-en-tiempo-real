import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const CircularProgress = ({ porcentajeObjetivosCompletos }) => {
  return (
    <CircularProgressbar
      value={porcentajeObjetivosCompletos}
      text={`${porcentajeObjetivosCompletos}%`}
      strokeWidth={8}
      styles={buildStyles({
        pathColor: porcentajeObjetivosCompletos > 85 ? "#287300" : "#6BBED0",
        textColor: porcentajeObjetivosCompletos > 85 ? "#287300" : "#6BBED0",
        trailColor: "#006473",
        strokeLinecap: "butt",
        pathTransitionDuration: 2,
        textSize: "20px",
      })}
      className="h-full w-full"
    />
  );
};
