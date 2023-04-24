import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name="Vd Bhai"><p>This is para</p></Greet>
      <Greet name = "Vishal"><button>Action</button></Greet>
      <Greet name ="Vd"/>
      <Welcome name="Vd Bhai"/>
      <Welcome name = "Vishal"/>
      <Welcome name ="Vd"/>
      <Hello/>
    </div>
  );
}

export default App;
