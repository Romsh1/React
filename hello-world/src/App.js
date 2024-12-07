import React, { Component } from 'react';
import './App.css';
import Greet from './components/Greet.js';
import Welcome from './components/Welcome.js';
// import Welcome from './components/Welcome.js';
// import Hello from './components/Hello.js';

class App extends Component () {
  render() {
    return (
      <div className="App">
        <Greet name = "Baby" heroName = "Ranger">
          <p>This is a children props</p></Greet>
        <Greet name= "Bae" heroName = "Batman">
          <button>Click Me</button></Greet>
        <Greet name = "Boo" heroName = "Perman" />
        <Welcome name = "Baby" heroName = "Ranger">
          <p>This is a children props</p></Welcome>
        <Welcome name= "Bae" heroName = "Batman">
          <button>Click Me</button></Welcome>
        <Welcome name = "Boo" heroName = "Perman" />

        {/* <Greet />
        <Welcome /> */}
        {/* <Hello /> */}
      </div>
    );  
  }
}

export default App
