import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';

function App() {
  return (
    <div>
      <Router>
      <Route path='/' exact component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
