import React from 'react';
import { NavLink } from 'react-router-dom';

import './header.scss';

const Header = ({ isAuthenticated, logOut, user, isAdmin }) => {
  const clickLogOut = () => logOut();
  return (
    <div className='header'>
      <div className='header-background'>
        <nav className='header-menu font-size-1-5em'>
          {isAuthenticated ? (
            <>
              {user.isAdmin && (
                <NavLink to='/add-news' className='header-menu-button'>
                  <span className='font-size-1-5em'>Добавить новость</span>
                </NavLink>
              )}
              <NavLink to='/add-advert' className='header-menu-button'>
                <i className='fas fa-plus font-size-1-5em'></i>
                <span className='font-size-1-5em'>Добавить объявление</span>
              </NavLink>
              <NavLink to='/dashboard' className='header-menu-button'>
                <i className='fas fa-user font-size-1-5em'></i>
                <span className='font-size-1-5em'>{user.name}</span>
              </NavLink>
              <NavLink
                to='/'
                onClick={clickLogOut}
                className='header-menu-button'
              >
                <i className='fas fa-sign-out-alt font-size-1-5em'></i>
              </NavLink>
            </>
          ) : (
            <NavLink to='/log-in' className='header-menu-button'>
              <i className='fas fa-sign-in-alt font-size-1-5em'></i>
            </NavLink>
          )}
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
