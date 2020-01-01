import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
// import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Router>
      <Route path='/' exact component={LandingPage} />
      <Route path='/home' exact component={HomePage} />
      </Router>
    </div>
  );
}

export default App;
