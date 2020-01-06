import React, { Component } from 'react';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <ul className='navUl'>
          <li className='navLi'>
            <a className='active' href='/home'>
              Home
            </a>
          </li>
          <li className='navLi'>
            <a href='/history'>History</a>
          </li>
          <li className='navLi'>
            <a href='/players'>Players</a>
          </li>
          <li className='navLi'>
            <a href='/fixtures'>Fixtures</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
