import React, { Component } from 'react';
import './HomePage.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Heading from '../../Components/Heading/Heading';
import Intro from '../../Components/Intro/Intro';

class HomePage extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='container'>
        <NavBar className='navBar'></NavBar>
        <Heading className='welcome'></Heading>
        <div className='stadium'></div>
        <Intro className='intro'></Intro>
        <div className='lastGames'></div>
        
      </div>
    );
  }
}
 
export default HomePage;