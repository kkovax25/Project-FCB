import React, { Component } from 'react';
import './LastGames.scss';

class Games extends Component {
  state = {};
  render() {
    return (
      <div className='lastGameCont'>
        <div>
          <img src={this.props.homeTeamLogo} alt='' />
          
        </div>
        <div>{this.props.homeTeamName}</div>
        <div>{this.props.homeTeamGoals}</div>
        <span>-</span>
        <div>{this.props.awayTeamGoals}</div>
        <div>{this.props.awayTeamName}</div>
        <div>
          <img src={this.props.awayTeamLogo} alt='' />
          
        </div>
      </div>
    );
  }
}

export default Games;
