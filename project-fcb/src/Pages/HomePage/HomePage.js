import React, { Component } from 'react';
import './HomePage.scss';
import NavBar from '../../Components/NavBar/NavBar'

class HomePage extends Component {
  state = {  }
  render() { 
    return ( 
      <div className='container'>
        <NavBar className='navBar'></NavBar>
        <div className='welcome'></div>
        <div className='badge'></div>
        <div className='intro'></div>
        <div className='lastGames'></div>
        
      </div>
    );
  }
}
 
export default HomePage;