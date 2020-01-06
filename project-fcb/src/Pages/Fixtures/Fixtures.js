import React, { Component } from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Selector from '../../Components/Selector/Selector';
import LeagueTable from '../../Components/LeagueTable/LeagueTable';
import './Fixtures.scss';

class Fixtures extends Component {
  state = {  }
  render() { 
    return ( <div className='container'>
     <NavBar className='navBar'></NavBar>
     <Selector className='selector'/>
     <LeagueTable className='leagueTable'/>
    </div>);
  }
}
 
export default Fixtures;