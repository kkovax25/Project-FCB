import React, { Component } from 'react';
import './Description.scss';

class Description extends Component {
  render () {
    return (
      <p className={this.props.className}>{this.props.description}</p>
    );
  }
}

export default Description;
