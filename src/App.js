import React from 'react';
import './App.css';
import Header from '../src/Components/Header/Header';
import Courses from '../src/Components/Courses/Courses'

function App() {
  return (
    <div>
      <Header></Header> <br />
      <h1>Lets Start with Brain-Trainers!</h1> <br />
      <Courses></Courses>
    </div>
  );
}

export default App;
