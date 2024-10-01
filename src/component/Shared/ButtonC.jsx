import React from "react";

const ButtonC = ({ text, bgColor, textColor, handler = () => {} }) => {
  return (
    <button
      onClick={handler}
      className={`${bgColor} ${textColor} cursor-pointer hover:scale-105 duration-300 py-2 px-4 w-32 rounded-full relative z-10`} // Set width using w-32 or w-24 for smaller width
    >
      {text}
    </button>
  );
};

export default ButtonC;
