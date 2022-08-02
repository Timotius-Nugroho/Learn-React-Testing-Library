import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import TestApi from "./components/testApi";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Let's learn React testing</h1>
        <Home />
        <TestApi />
      </header>
    </div>
  );
}

export default App;
