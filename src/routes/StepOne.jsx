import React from "react";

const StepOne = () => {
  const handleToggle = () => {
    const htmlElement = document.getElementsByTagName("html")[0];
    htmlElement.classList.toggle("dark");
  };

  return (
    <div>
      <button className="absolute w-fit outline" onClick={handleToggle}>
        DarkMode
      </button>
    </div>
  );
};

export default StepOne;
