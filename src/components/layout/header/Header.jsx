import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = props => {
  const clickLink = () => console.log('you click link!!!');
  return (
    <div className='header'>
      <div className='header-background'>
        <nav className='header-menu'>
          <NavLink
            to='/log-in'
            onClick={clickLink}
            className='header-menu-button'
          >
            <i className='fas fa-sign-in-alt'></i>
          </NavLink>
        </nav>
        <div className='left-background' />
        <div className='right-background' />
      </div>
      <h1>ПОГРУЗЧИКИ</h1>
      <p>Объявления об аренде в Республике Беларусь</p>
    </div>
  );
};

export default Header;
