import React from 'react';
import Factfile from './Factfile';
import logo from './izone-logo.png';
import './style.css';

function App() {
  return (
    <div className="page-container">
      <img id="logo" src={logo} alt="izone-logo" />
      <h2 id="title">IZ*ONE Fact File</h2>
      <Factfile />
    </div>
  );
}

export default App;
