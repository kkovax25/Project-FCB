import React, { Component } from 'react';
import './Table.scss';

class Table extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.pos}</td>
        <td>
          <img className='img' src={this.props.badge} alt='badge' />
        </td>
        <td>{this.props.team_name}</td>
        <td>{this.props.games_played}</td>
        <td>{this.props.games_won}</td>
        <td>{this.props.games_drawn}</td>
        <td>{this.props.games_lost}</td>
        <td>
          {this.props.goals_scored}:{this.props.goals_conceded}
        </td>
        <td>{this.props.points}</td>
      </tr>
    );
  }
}

export default Table;
