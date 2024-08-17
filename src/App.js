import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export function Association() {
  const [association, setAssociation] = useState("Family Friend");

  return (
    <>
      <h1>To Matthew, I am: {association}!</h1>
      <button
        type="button"
        onClick={() => setAssociation("Family")}
      >Family</button>
      <button
        type="button"
        onClick={() => setAssociation("School Friend/Acquaintance")}
      >School Friend/Acquaintance</button>
      <button
        type="button"
        onClick={() => setAssociation("Potential Employer")}
      >Potential Employer</button>
      <button
        type="button"
        onClick={() => setAssociation("Other")}
      >Other</button>
    </>
  );
}

export default App;
