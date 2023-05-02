import React from "react";

const Decrement = ({ onClick, ...props }) => {
  return (
    <button
      className="flex items-center justify-center p-5 text-lg cursor-pointer decrement bg-slate-200"
      onClick={onClick}
      {...props}
    >
      -
    </button>
  );
};

export default Decrement;
