import React from 'react';
import logo from './logo.svg';
import './App.css';

const a = 1651

// function foo(name) {
//   const lasnName = name;
//   return lastName;
// }
const x = 200

// foo('Denis')
console.log(window);
console.log(x, a);
console.log('dsfad');

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit
          <code>src/App.js</code>
          and save to reload.
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

export default App;
