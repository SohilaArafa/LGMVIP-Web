import React from 'react'

const Digits = ({ symbol, color, handleClick }) => {
  return (
    <div
      onClick={() => handleClick(symbol)}
      className="btns"
      style={{ backgroundColor: color }}
    >
      {symbol}
    </div>
  );
}

export default Digits
