// import { Component } from 'react';
import './App.css';
// import Counter from './components/Counter';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';

function App() {
  return (
    <div className="App">
      <h1>Movie-Ticket Booking</h1>

<Routes>

  <Route path='/' element={<Home />}/>
  <Route path='/:id' element={<Details />}/>
</Routes>


    </div>
  );
}

export default App;
