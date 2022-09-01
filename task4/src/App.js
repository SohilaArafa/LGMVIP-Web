import './App.css';
import Digits from './components/Digits';
import { useState } from 'react';
import Input from './components/Input';
import * as math from "mathjs";


function App() {
  const [input, setInput] = useState('')
  const [result,setResult] = useState('');

  const add = (val) => {
    setInput((input) => [...input, val + ""]);
    console.log(input)
  };

  const calculateResult = () => {
    const inputs = input.join(""); 
    console.log(inputs)
    setResult(math.evaluate(inputs));
  };
  const resetInput = () => {
    setInput("");
    setResult("");
  }; 

  return (
    <div className="App">
      <div className='container'>
      <Input input={input} result={result} />
      </div>
      <div className="row">
        <Digits sign="1" handleClick={add} />
        <Digits sign="2" handleClick={add} />
        <Digits sign="3" handleClick={add} />
        <Digits sign="/" handleClick={add} />
      </div>
       <div className="row">
          <Digits sign="4" handleClick={add} />
          <Digits sign="5" handleClick={add} />
          <Digits sign="6" handleClick={add} />
          <Digits sign="*" handleClick={add} />
        </div>
        <div className="row">
          <Digits sign="7" handleClick={add} />
          <Digits sign="8" handleClick={add} />
          <Digits sign="9" handleClick={add} />
          <Digits sign="+" handleClick={add} />
        </div>
        <div className="row">
          <Digits sign="0" handleClick={add} />
          <Digits sign="." handleClick={add} />
          <Digits sign="-" handleClick={add} />
          <Digits sign="=" handleClick={calculateResult} color='white' />
        </div>
        <button className='clear' onClick={() => resetInput()}>CLEAR</button>
    </div>
  );
}

export default App;
