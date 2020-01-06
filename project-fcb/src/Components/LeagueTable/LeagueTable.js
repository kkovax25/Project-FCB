import React, { Component } from 'react';
import './LeagueTable.scss';
import '../Table/Table.scss';
import Table from '../Table/Table';

class LeagueTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leagueTable: [],
      isLoaded: false,
      clTable: [],
      copaTable: []
    };
  }

  getLeagueTable = async () => {
    const url =
      'https://cors-anywhere.herokuapp.com/http://v2.api-football.com//leagueTable/775';
    const key = '0678077e73252b4c193f8e26f2cdd330';

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': key,
        Accept: 'application/json'
      }
    });
    const data = await response.json();
    this.setState({ 
      leagueTable: data.api.standings[0],
       isLoaded: true });
    console.log(this.state.leagueTable);
  };

  getClTable = async () =>{
    const url='https://cors-anywhere.herokuapp.com/http://v2.api-football.com/leagueTable/530';
    const key = '0678077e73252b4c193f8e26f2cdd330';

    const response = await fetch(url,{
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': key,
        Accept: 'application/json'
      }
    });

    const data = await response.json();
    console.log(data.api.standings[5]);
    this.setState({clTable: data.api.standings[5],
    isLoaded: true
    });
    console.log(this.state.clTable);
  }

  render() {
    return (
      <div className={this.props.className}>
        <button onClick={this.getLeagueTable}>fetch</button>
        <button onClick={this.getClTable}>fetchCL</button>
        <div className='cont'>
          <table style={this.state.isLoaded ? { display:'block'} : {display : 'none'} }>
            <thead>
              <tr>
                <th>Pos</th>
                <th>Badge</th>
                <th>Team Name</th>
                <th>GP</th>
                <th>W</th>
                <th>D</th>
                <th>L</th>
                <th>Goals</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {this.state.leagueTable.map(infos => (
                <Table
                  key={infos.rank}
                  pos={infos.rank}
                  badge={infos.logo}
                  team_name={infos.teamName}
                  games_played={infos.all.matchsPlayed}
                  games_won={infos.all.win}
                  games_drawn={infos.all.draw}
                  games_lost={infos.all.lose}
                  goals_scored={infos.all.goalsFor}
                  goals_conceded={infos.all.goalsAgainst}
                  points={infos.points}
                />
              ))}
              {this.state.clTable.map(clTable => (
                <Table
                  key={clTable.rank}
                  pos={clTable.rank}
                  badge={clTable.logo}
                  team_name={clTable.teamName}
                  games_played={clTable.all.matchsPlayed}
                  games_won={clTable.all.win}
                  games_drawn={clTable.all.draw}
                  games_lost={clTable.all.lose}
                  goals_scored={clTable.all.goalsFor}
                  goals_conceded={clTable.all.goalsAgainst}
                  points={clTable.points}
                />
              ))}
            </tbody>
          </table>

        </div>
      </div>
    );
  }
}

 
export default LeagueTable;