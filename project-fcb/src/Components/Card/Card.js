import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
  render() {
    return (
      <div className='cardCont' onClick={this.props.onClick}>
        <img className='cardContImg' src={this.props.src} alt='button' />
        <h2 className='cardContTitle'> {this.props.title} </h2>
      </div>
    );
  }
}

export default Card;
