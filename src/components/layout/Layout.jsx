import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './layout.scss';
import Header from './header/Header.jsx';
import Footer from './footer/Footer.jsx';

const Layout = ({ childeren }) => {
  return (
    <Fragment>
      <Header />
      <div className='pages-wrapper'>{childeren}</div>
      <Footer />
    </Fragment>
  );
};

Layout.propTypes = {};

export default Layout;
