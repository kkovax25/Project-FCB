import React, { Component } from 'react';
import './NavBar.scss';

class NavBar extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <ul className='navUl'>
          <li className='navLi'>
            <a className='active' href='#home'>
              Home
            </a>
          </li>
          <li className='navLi'>
            <a href='#news'>History</a>
          </li>
          <li className='navLi'>
            <a href='#contact'>Players</a>
          </li>
          <li className='navLi'>
            <a href='#about'>Fixtures</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default NavBar;
