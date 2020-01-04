import React, { Component } from 'react';
import Games from './Games'
import './LastGames.scss';


class LastGames extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fixtures: [],
      barcaGame: [],
      playedGames: []
    };
  }

  handleFixturesClick = async () => {
    const url = 'https://cors-anywhere.herokuapp.com/http://v2.api-football.com/fixtures/league/775';
    const key = '0678077e73252b4c193f8e26f2cdd330';
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': key,
        Accept: 'application/json'
      }
    });
    const data = await response.json();
    this.setState({ fixtures: data.api.fixtures });
    console.log(this.state.fixtures);
    const barcaGames = this.state.fixtures.filter(game => {
      return game.awayTeam.team_id === 529 || game.homeTeam.team_id === 529;
    });
    console.log(barcaGames);
    this.setState({ barcaGame: barcaGames });
    const playedGames = this.state.barcaGame.filter(played => {
      return played.statusShort === "FT"
    })
    console.log(playedGames);
    this.setState({playedGames: playedGames})
  };



  render() { 
    return ( 
      <div className={this.props.className}>
      <h1 onClick={this.handleFixturesClick}>Last Game Results</h1>  
        {this.state.playedGames.reverse().map(infos => (
          <Games
            key={infos.fixture_id}
            homeTeamLogo={infos.homeTeam.logo}
            homeTeamName={infos.homeTeam.team_name}
            homeTeamGoals={infos.goalsHomeTeam}
            awayTeamLogo={infos.awayTeam.logo}
            awayTeamName={infos.awayTeam.team_name}
            awayTeamGoals={infos.goalsAwayTeam}
          ></Games>
        ))}
    </div>);
  }
}
 
export default LastGames;

