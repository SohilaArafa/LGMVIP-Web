import './App.css';
import Input from './components/Input';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Student Registeration
        </h2>
        <hr />
        <h4>Personal Information</h4>
        <Input />
        <div className='right'>
          test
        </div>
      </header>
    </div>
  );
}

export default App;
