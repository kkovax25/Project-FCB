import React, { Component } from 'react';
import './HomePage.scss';
import NavBar from '../../Components/NavBar/NavBar';
import Heading from '../../Components/Heading/Heading';
import Intro from '../../Components/Intro/Intro';
import Stadium from '../../Components/Stadium/Stadium';
import LastGames from '../../Components/LastGames/LastGamesFetch';

class HomePage extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='container'>
        <NavBar className='navBar'></NavBar>
        <Heading className='welcome'></Heading>
        <Stadium className='stadium'></Stadium>
        <Intro className='intro'></Intro>
        <LastGames className='lastGames'></LastGames>
        
      </div>
    );
  }
}
 
export default HomePage;