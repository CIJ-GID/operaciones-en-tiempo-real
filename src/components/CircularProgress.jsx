import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export const CircularProgress = ({ porcentajeObjetivosCompletos }) => {
  return (
    <CircularProgressbar
      value={50}
      text={"50%"}
      strokeWidth={8}
      styles={buildStyles({
        pathColor: porcentajeObjetivosCompletos > 0 ? "#68AD44" : "#6BBED0",
        textColor: porcentajeObjetivosCompletos > 0 ? "#68AD44" : "#6BBED0",
        trailColor: "#006473",
        strokeLinecap: "butt",
        pathTransitionDuration: 2,
        textSize: "20px",
      })}
      className="h-full w-full"
    />
  );
};
