import React, { Component } from 'react';
import Button from '../Button/Button';

import './Banner.scss';

class Banner extends Component {
  state = {};
  render() {
    return (
      <div className={this.props.className}>
        <title className='titleCont'>
          <h1 className='title'>Fc Barcelona</h1>
          <img
            className='logo'
            src='/img/fcblogo.svg'
            alt='Fc Barcelona Badge'
          ></img>
          <a href='/home'>
            <Button
              className='button homeButton'
              innerText='Continue to the site'
            ></Button>
          </a>
        </title>
      </div>
    );
  }
}

export default Banner;
