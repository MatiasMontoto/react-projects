import React from "react";

const Square = ({ value, onClick }) => {
  const style = {
    background: "lightblue",
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: "800",
    cursor: "pointer",
    outline: "none",
  };

  return (
    <button style={style} className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
