import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useSelector } from "react-redux";

const CircularProgress = () => {
  const porcentajeObjetivosCompletos = useSelector(
    (state) => state.data.porcentajeObjetivosCompletos
  );

  return (
    <div className="flex h-full w-full">
      <CircularProgressbar
        value={porcentajeObjetivosCompletos}
        text={`${porcentajeObjetivosCompletos}%`}
        strokeWidth={8}
        styles={buildStyles({
          pathColor: 50 > 85 ? "#262626" : "#005F71",
          textColor: 50 > 85 ? "#262626" : "#005F71",
          trailColor: "#1C1C1C",
          strokeLinecap: "butt",
          pathTransitionDuration: 2,
          textSize: "20px",
        })}
        className="h-full w-full"
      />
    </div>
  );
};

export default CircularProgress;
