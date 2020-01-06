import React, { Component } from 'react';
import Card from '../Card/Card';
import './Selector.scss';

class Selector extends Component {
  
  render() { 
    return ( <div className={this.props.className}>
      <Card src='/img/laliga.png' onClick={this.getLeagueTable} title='La Liga Santander'/>
      <Card src='/img/copa.png' title='Campeonato de España'/>
      <Card src='/img/cl.png' title='Champions League'/>
    </div>);
  }
}
 
export default Selector;