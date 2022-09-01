import React from 'react'

const Input = ({input, result}) => {
  return (
    <div className="input-wrapper">
      <div className="result">
        <h1>{result}</h1>
      </div>
      <div className="input">
        <h3>{input}</h3>
      </div>
    </div>
  );
}

export default Input
