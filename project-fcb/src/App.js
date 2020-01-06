import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/HomePage/HomePage';
import Fixtures from './Pages/Fixtures/Fixtures';

function App() {
  return (
    <div>
      <Router>
      <Route path='/' exact component={LandingPage} />
      <Route path='/home' exact component={HomePage} />
      <Route path='/fixtures' exact component={Fixtures}/>
      </Router>
    </div>
  );
}

export default App;
