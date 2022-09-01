import React from 'react'

const Digits = ({ sign, color, handleClick }) => {
  return (
    <div className="btns"
      onClick={() => handleClick(sign)}
      style={{ backgroundColor: color }}
    >
      {sign}
    </div>
  );
}

export default Digits
