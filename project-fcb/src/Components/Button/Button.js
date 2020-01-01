import React from 'react';
import './Button.scss';

class Button extends React.Component {
  render () {
    return (
      <button className={this.props.className} onClick={this.props.handleClick}>{this.props.innerText}</button>
    );
  }
}

export default Button;
