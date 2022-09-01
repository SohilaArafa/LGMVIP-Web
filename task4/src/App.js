import './App.css';
import Digits from './components/Digits';
import { useState } from 'react';
import Input from './components/Input';
import * as math from "mathjs";


function App() {
  const [input, setInput] = useState('')
  const [result,setResult] = useState('');
  const addToText = (val) => {
    setInput((input) => [...input, val + " "]);
  };

  const calculateResult = () => {
    const inputs = input.join(""); 

    setResult(math.evaluate(inputs));
  };

  const resetInput = () => {
    setInput("");
    setResult("");
  }; 
  const buttonColor = '#797979';
  return (
    <div className="App">
      <div className='container'>
      <Input input={input} result={result} />
      </div>
      <div className="row">
        <Digits symbol="1" handleClick={addToText} />
        <Digits symbol="2" handleClick={addToText} />
        <Digits symbol="3" handleClick={addToText} />
        <Digits symbol="/" color={buttonColor} handleClick={addToText} />
      </div>
       <div className="row">
          <Digits symbol="4" handleClick={addToText} />
          <Digits symbol="5" handleClick={addToText} />
          <Digits symbol="6" handleClick={addToText} />
          <Digits symbol="*" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Digits symbol="7" handleClick={addToText} />
          <Digits symbol="8" handleClick={addToText} />
          <Digits symbol="9" handleClick={addToText} />
          <Digits symbol="+" color={buttonColor} handleClick={addToText} />
        </div>
        <div className="row">
          <Digits symbol="0" handleClick={addToText} />
          <Digits symbol="." handleClick={addToText} />
          <Digits symbol="-" color={buttonColor} handleClick={addToText} />
          <Digits symbol="=" handleClick={calculateResult} color='white' />
        </div>
        <button className='clear' onClick={() => resetInput()}>CLEAR</button>
    </div>
  );
}

export default App;
