import React, { Component } from 'react';
import './Stadium.scss';

class Stadium extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <img className='stadPic' src='/img/camp-nou.jpeg' alt='lol' />
      </div>
    );
  }
}

export default Stadium;
