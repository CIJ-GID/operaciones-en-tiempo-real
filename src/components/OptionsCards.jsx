import React from "react";
import { useNavigate } from "react-router-dom";

const OptionsCards = ({ title, description }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem("type", title.toLowerCase());
    navigate("/2");
  };

  return (
    <div
      className="hover: mx-12 h-60 flex-1 cursor-pointer rounded-md border-2 border-secondary bg-base/30 transition hover:bg-base/40"
      onClick={() => handleClick()}
    >
      <h1 className="mt-4 text-center underline">{title}</h1>
      <p className="p-4 text-center">{description}</p>
    </div>
  );
};

export default OptionsCards;
