import logo from './logo.svg';
import './App.css';
import Component1 from './components/Component1/Component1';
import Component2 from './components/Component2/Component2';
import React, {useState} from 'react'

function App() {
  
  const [name, setName] = useState('Sally')
  const changeName = () =>{
    setName('Sally 1')
  }

  return (
    <div className="App">
      <Component1 name={name} setName={setName}/>
      <Component2 name={name} setName={setName}/>
      <button onClick= {() => changeName()} >Change Name</button>
    </div>
  );
}

export default App;
