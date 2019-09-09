import React from 'react';
import './header.scss';

const Header = props => {
  return (
    <div className='header'>
      <div className='header-background'>
        <div className='left-background' />
        <div className='right-background' />
      </div>
      <h1>ПОГРУЗЧИКИ</h1>
      <p>Объявления об аренде в Республике Беларусь</p>
    </div>
  );
};

Header.propTypes = {};

export default Header;
