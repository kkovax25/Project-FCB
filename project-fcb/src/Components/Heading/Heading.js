import React, { Component } from 'react';
import './Heading.scss';

class Heading extends Component {
  render () {
    return (
      <div className={this.props.className}>
        <h1 className='headingText'>Welcome</h1>
      </div>
    );
  }
}

export default Heading;
