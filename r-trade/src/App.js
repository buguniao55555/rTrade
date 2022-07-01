import React from 'react';
import logo from './rTrade_logo_darkMode.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Welcome to rTrade </h1>
        
        <img src={logo} width={450} height={200} alt="logo" />

        <a href = "github.com"> Github Links </a>
        
        <p> An RCOS Porject. </p>
        
      </header>
    </div>
  );
}
 
export default App;
