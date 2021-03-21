import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
    
    <Weather defaultCity="New York"/>
    
    <footer>
      This project was coded by Daisy and is {""}
    <a href="https://github.com/daisydex/react_finalproject" target="_blank" rel="noreferrer"> open-sourced on GitHub </a>
  </footer>
   </div> 
    </div>
  );
}

export default App;
