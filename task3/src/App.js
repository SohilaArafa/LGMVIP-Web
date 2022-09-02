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
        <hr style={{marginTop : 20}}/>
      </header>
    </div>
  );
}

export default App;
