import React from 'react';
import './App.css'
import Home from './components/Koti';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CardGame from './components/CardGame';
export default function App(){

  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cardgame">CardGame</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cardgame" element={<CardGame />} />
      </Routes>

    </Router>
  );
}